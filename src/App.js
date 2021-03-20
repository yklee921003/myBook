
import React from 'react'
import Library from './Library.js'
import Search from './Search.js'
import {Route} from 'react-router-dom'
import './App.css'

function BooksApp(props) {

    return (
      <div className="app">
        <Route exact path='/'render= {() => (
          <Library/>
        )} />
        <Route exact path='/search'render= {() => (
          <Search />
        )} />
      </div>
    )
}

export default BooksApp