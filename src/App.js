import './App.css';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// or import it this way
import {Paper, Grid} from '@material-ui/core';
import Items from './components/Items';
import Total from './components/Total';
import React, { Component } from 'react'
import booksJson from './books.json'
import Search from './components/Search';

class App extends Component {
  

  state = {
    books: booksJson,
    filteredBooks: booksJson, 
    total: []
  }

  handleAddTotal = (event, book) => {
    // Preventing the default behaviour of forms
    // since the make a GET request with query 
    event.preventDefault()
    console.log('Hereeeeeeeeeeeeee!')
    // here `event.target` will give you the form node
    // you can grab any `input value` from that form using it's name attributes
    console.log(event.target.quantity.value)
    console.log(book)

    let bookObj = {
      title: book.title, 
      price: book.price,
      quantity: Number(event.target.quantity.value)
    }
    // Add your book to the total array along with the other books
    this.setState({
      total: [bookObj, ...this.state.total]
    })

  }

  handleAddNewBook = (newBook) => {
      // remeber to update the filtered books as well which we have not done
      this.setState({
        books: [newBook, ...this.state.books]
      })
  }

  handleSearch = (event) => {
    let searchedBook = event.target.value
    const {books} = this.state

    // Filter the books 
    let filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(searchedBook.toLowerCase())
    })

    // update the books state to fileredBooks
    this.setState({
      filteredBooks: filteredBooks
    })
  }

  render() {
    return (
      <div >
        My shopping App
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper >
                <Search onSearch={this.handleSearch} />
                <Items 
                  books={this.state.filteredBooks}
                  handleAddTotal={this.handleAddTotal}
                  onAddNewBook={this.handleAddNewBook}
                />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >
              <Total books={this.state.total}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default App;
