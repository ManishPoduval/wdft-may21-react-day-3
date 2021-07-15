import React, { useState, useEffect } from 'react'
import {Paper, Grid} from '@material-ui/core';
import Items from './components/Items';
import Total from './components/Total';
import booksJson from './books.json'
import Search from './components/Search';

function App() {

  const [books, updateBooks]  = useState(booksJson)
  const [filteredBooks, updateFilteredBooks]  = useState(booksJson)
  const [total, updateTotal]  = useState([])

  const handleAddTotal = (event, book) => {
    // Preventing the default behaviour of forms
    // since the make a GET request with query 
    event.preventDefault()

    let bookObj = {
      title: book.title, 
      price: book.price,
      quantity: Number(event.target.quantity.value)
    }
    // Add your book to the total array along with the other books
    updateTotal( [bookObj, ...total])
  }

  const handleAddNewBook = (newBook) => {
    // remeber to update the filtered books as well which we have not done
    updateBooks([newBook, ...books])
    updateFilteredBooks([newBook, ...books])
  }

  const handleSearch = (event) => {
    // here `event.target` will be an <input> element
    let searchedBook = event.target.value

    // Filter the books 
    let filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(searchedBook.toLowerCase())
    })

    // update the books state to fileredBooks
    updateFilteredBooks(filteredBooks)
  }

  // behaves as your componentDidMount 
  useEffect(() => {
      console.log('App was MOUNTED')
      axios.get
  }, [])

  // conditional componentDidUpdate only when the state `books` gets updated
  useEffect(() => {
    console.log('App was UPDATED')
  }, [books])

  // this function will run as a componentDidUpdate only when the state `total` gets updated
  useEffect(() => {
    console.log('App was UPDATED')
  }, [total])

// this function will run as a componentDidUpdate only when the state `total` or the state `books` gets updated
  useEffect(() => {
    console.log('App was UPDATED')
  }, [total])

  
  // behaves as your componentDidUpdate 
  useEffect(() => {
    console.log('App was UPDATED')
  })

  // behaves as your componentDidUnMount 
  useEffect(() => {
    return () => {
      console.log('App was UNMOUNTED')
    }
  })


  return (
    <div >
      My shopping App
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper >
              <Search onSearch={handleSearch} />
              <Items 
                books={filteredBooks}
                handleAddTotal={handleAddTotal}
                onAddNewBook={handleAddNewBook}
              />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper >
            <Total books={total}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}



export default App;
