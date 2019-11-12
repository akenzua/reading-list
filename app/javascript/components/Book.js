import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div className="bookContainer">
    <h2>
      {book.readOn}
      {' - '}
      {book.title}
    </h2>
    <ul>
      <li>
        <strong>Type:</strong>
        {' '}
        {book.title}
      </li>
      <li>
        <strong>Date:</strong>
        {' '}
        {book.readOn}
      </li>
      <li>
        <strong>Title:</strong>
        {' '}
        {book.title}
      </li>
      <li>
        <strong>Speaker:</strong>
        {' '}
        {book.publisher}
      </li>
     
    </ul>
  </div>
);

// Book.propTypes = {
//   event: PropTypes.shape(),
// };

// Book.defaultProps = {
//   event: undefined,
// };

export default Book;