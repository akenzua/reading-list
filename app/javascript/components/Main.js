import React from 'react';
import axios from 'axios';
import Header from './Header';
import BookList from './BookList';

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

    return (
      <div>
        <Header />
        <BookList books={books} />
      </div>
    );
  }
}

export default Main;