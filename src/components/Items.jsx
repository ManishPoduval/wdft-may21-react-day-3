import React, { useState } from 'react'
import AddForm from './AddForm'
import ItemDetail from './ItemDetail'

function Items(props) {

    const [showForm, updateShowForm] = useState(false)

    const handleClick = () => {
        updateShowForm(true)
    }

    const handleAddBook = (event) => {
        // Preventing the default behaviour of forms
        // since the make a GET request with query 
        event.preventDefault();

        updateShowForm(true)

        let newBook = {
            title: event.target.title.value,
            price: event.target.price.value
        }

        props.onAddNewBook(newBook)
    }

    const {books, handleAddTotal} = props

    return (
        <div>
            List
            {/* conditional rendering with ternaries */}
            {
                showForm ? 
                    <AddForm onAddBook={handleAddBook} /> : 
                    <button onClick={handleClick} >Show Form</button>
            }
            
            {
                books.map((book, i) => {
                    return <ItemDetail
                    key={i} 
                    myBook={book}
                    handleAddTotal={handleAddTotal} 
                    />
                })  
            }
        </div>
    )
}

export default Items