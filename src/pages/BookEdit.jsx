import React from 'react';
import HomeLayout from '../HomeLayout/HomeLayout';
import BookEditor from '../components/BookEdit';
import PropTypes from 'prop-types'
class BookEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      book: null
    };
  }

  componentWillMount () {
    const bookId = this.context.router.params.id;
    fetch('http://localhost:3000/book/' + bookId)
      .then(res => res.json())
      .then(res => {
        this.setState({
          book: res
        });
      });
  }

  render () {
    const {book} = this.state;
    return (
      <HomeLayout title="编辑图书">
        {
          book ? <BookEditor editTarget={book}/> : '加载中...'
        }
      </HomeLayout>
    );
  }
}

BookEdit.contextTypes = {
  router: PropTypes.object.isRequired
};

export default BookEdit;