import React from 'react'
import * as BooksAPI from './BooksAPI'
class ShelfOptions extends React.Component{
  _isMounted = false;
  state = {
    shelfType: '',
  }

  componentDidMount(){
    this._isMounted = true;
      BooksAPI.get(this.props.book.id)
        .then((book) => {
          if(this._isMounted){
            this.setState(() => ({
              shelfType: book.shelf
            }))
          }
        })
  }

  handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    const {book,updateBooks} = this.props
    updateBooks(book,value)
    this.setState(() => ({
      shelfType: value
    }))
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  renderSwitch(){
    switch(this.state.shelfType){
      case 'currentlyReading':
        return (
          <div className="book-shelf-changer" >
            <select value="currentlyReading" onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
      case 'wantToRead':
        return (
          <div className="book-shelf-changer">
            <select value="wantToRead" onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
      case 'read':
        return (
          <div className="book-shelf-changer">
            <select value="read" onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
      default:
        return (
          <div className="book-shelf-changer">
            <select defaultValue="none" onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
    }
  }

  render(){
    return(
      this.renderSwitch()
    )
  }
}

export default ShelfOptions
