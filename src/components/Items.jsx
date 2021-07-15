import React, { Component } from 'react'
import AddForm from './AddForm'
import ItemDetail from './ItemDetail'

class Items extends Component {

    // Our props will look like this
    // available in `this.props`
    /*
     {
         books: [{}, {}, {}],
         handleAddTotal: func
     }
    */

    state = {
        showForm: false
    }

    handleClick = () => {
        this.setState({
            showForm: true
        })
    }

    handleAddBook = (event) => {
        // Preventing the default behaviour of forms
        // since the make a GET request with query 
        event.preventDefault();

        this.setState({
            showForm: false
        })

        let newBook = {
            title: event.target.title.value,
            price: event.target.price.value
        }

        this.props.onAddNewBook(newBook)
    }

    componentDidMount() {
        console.log('Items was MOUNTED')
    }
    
    componentDidUpdate(){
        console.log('Items was UPDATED')
    }

    render() {
        console.log('Items was RENDERED')
        // destructure your books here
        const {books, handleAddTotal} = this.props
        const {showForm} = this.state

        return (
            <div>
                List
                {/* conditional rendering with ternaries */}
                {
                    showForm ? <AddForm onAddBook={this.handleAddBook} /> : <button onClick={this.handleClick} >Show Form</button>
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
}

export default Items