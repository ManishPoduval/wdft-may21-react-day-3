import React, { Component } from 'react'

class Total extends Component {
    //Our props will look like this

    /*

    this.props = {
        books = [{},  . . . . {}]
    }

    */

    componentDidMount() {
        console.log('Total was MOUNTED')
    }

    componentDidUpdate(){
        console.log('Total was UPDATED')
    }
    

    render() {
        console.log('Total was RENDERED')
        const {books} = this.props

        let sum = books.reduce((acc, book) => {
            return acc + (book.quantity * book.price)
        }, 0)

        return (
            <div>
                Total
                {
                    books.map((book, i) => {
                        return (
                            <div key={i} >
                                {book.title} x {book.quantity} = {book.quantity * book.price}
                            </div>    
                        )
                    })
                }

                <h3>
                    Total amount is : {sum}
                </h3>
            </div>
        )
    }
}

export default Total