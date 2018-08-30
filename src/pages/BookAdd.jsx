import React from 'react';
import HomeLayout from '../HomeLayout/HomeLayout';
import BookEditor from '../components/BookEdit';

class BookAdd extends React.Component {
  render () {
    return (
      <HomeLayout title="添加图书">
        <BookEditor/>
      </HomeLayout>
    );
  }
}

export default BookAdd;