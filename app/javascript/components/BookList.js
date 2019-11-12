import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class BookList extends React.Component {
  renderBooks() {
    const { activeId, books } = this.props;
    books.sort(
      (a, b) => new Date(b.readOn) - new Date(a.readOn),
    );

    return books.map(book => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`} className={activeId === book.id ? 'active' : ''}>
            {book.readOn}
            {' - '}
            {book.title}
          </Link>
        </li>
      ));
  }

  render() {
    return (
      <section className="bookList">
        <h2>Books</h2>
        <ul>{this.renderBooks()}</ul>
      </section>
    );
  }
}

// EventList.propTypes = {
//   events: PropTypes.arrayOf(PropTypes.object),
// };

// EventList.defaultProps = {
//   events: [],
// };

export default BookList