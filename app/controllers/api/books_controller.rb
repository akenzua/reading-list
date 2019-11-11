class Api::BooksController < ApplicationController
    respond_to :json
  
    def index
      respond_with Book.order(readOn: :DESC)
    end
  
    def show
      respond_with Book.find(params[:id])
    end
  
    def create
      respond_with :api, Book.create(book_params)
    end
  
    def destroy
      respond_with Book.destroy(params[:id])
    end
  
    def update
      book = Book.find(params['id'])
      book.update(book_params)
      respond_with Book, json: book
    end
  
    private
  
    def book_params
      params.require(:book).permit(
        :id,
        :title,
        :author,
        :publisher,
        :readOn
      )
    end
  end