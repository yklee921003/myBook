import React from 'react'
import ShelfOptions from './ShelfOptions'

class SearchDisplay extends React.Component{

  checkUndefined(book){
    if(typeof book.imageLinks === 'undefined'){
      book.imageLinks = {thumbnail: "https://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
    }
    if(typeof book.authors === 'undefined'){
      book.authors = ["Unknown"]
    }
  }


  render(){
    const { books,updateBooks} = this.props
    books.map((book) => (
      this.checkUndefined(book)
    ))

    return(
      <div className="search-books-results">
        <ol className="books-grid">
        {
          books.map((book) => (
            <li key={book.id}>
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
    )
  }
}

export default SearchDisplay