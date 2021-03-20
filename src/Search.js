import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchDisplay from './SearchDisplay'

class Search extends React.Component{

  state = {
    books: []
  }

  //Show search results if query is correct
  //Show empty results if input is empty
  handleSubmit = (e) => {
    e.preventDefault()
      BooksAPI.search(e.target.value)
        .then((books) => {
            if(typeof books === 'undefined' || books.error === "empty query"){
                this.setState(() => ({
                  books: []
                }))
            }
            else{
                this.setState(() => ({
                  books
                }))
            }
          })
  }
  //Calling BooksAPI.update() to change books on main page
  updateBooks = (book,shelf) => {
    BooksAPI.update(book,shelf)
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>
            Close
          </Link>
          <form onChange={this.handleSubmit}>
            <div className="search-books-input-wrapper">
              <input type="text" name='search' placeholder="Search by Genre"/>
            </div>
          </form>
        </div>
        <SearchDisplay books={this.state.books} updateBooks={this.updateBooks}/>
      </div>
    )
  }
}

export default Search