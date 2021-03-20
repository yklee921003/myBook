import React from 'react'
import ShelfOptions from './ShelfOptions'

class WantToRead extends React.Component{

  render(){
    const {checkUndefined, updateBooks} = this.props
    //Filtering books with the correct shelf    
    const books = this.props.books.filter(book =>
    book.shelf === "wantToRead" ).map((book) => (
      checkUndefined(book)
    ))

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            books.map((book) => (
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <img className="book-cover" src={book.imageLinks.thumbnail} alt={book.title}/>
                    <ShelfOptions book={book} shelfType={book.shelf} updateBooks={updateBooks}/>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors[0]}</div>
                </div>
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead