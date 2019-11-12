import React from 'react';
import axios from 'axios';
import Header from './Header';
import BookList from './BookList';
import PropTypes from 'prop-types';
import PropsRoute from './PropsRoute';
import Book from './Book';
import './App.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/books.json')
      .then(response => this.setState({ books: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { books } = this.state;
    if (books === null) return null;

    const { match } = this.props;
    const bookId = match.params.id;
    const book = books.find(e => e.id === Number(bookId));


    return (
      <div>
        <Header />
        <div className="grid">
           <BookList books={books} activeId={Number(bookId)} />
           <PropsRoute path="/books/:id" component={Book} book={book} />
        </div>
      </div>
    );
  }
}

  Book.propTypes = {
    match: PropTypes.shape(),
  };
  
  Book.defaultProps = {
    match: undefined,
  };

export default Main;