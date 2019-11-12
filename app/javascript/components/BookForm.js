import React from 'react';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  render() {
    return (
      <div>
        <h2>New Book</h2>
        <form className="bookForm" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">
              <strong>Title:</strong>
              <input type="text" id="title" name="title" />
            </label>
          </div>
          <div>
            <label htmlFor="readOn">
              <strong>Read On:</strong>
              <input type="text" id="readOn" name="readOn" />
            </label>
          </div>
          
          <div>
            <label htmlFor="publisher">
              <strong>Publisher:</strong>
              <input type="text" id="publisher" name="spublisher" />
            </label>
          </div>
          <div>
            <label htmlFor="author">
              <strong>Author</strong>
              <input type="text" id="author" name="author" />
            </label>
          </div>
          
          <div className="form-actions">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookForm;