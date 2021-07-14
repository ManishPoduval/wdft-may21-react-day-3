import React, { Component } from 'react'

class Total extends Component {
    //Our props will look like this

    /*

    this.props = {
        books = [{},  . . . . {}]
    }

    */

    

    render() {
        const {books} = this.props

        let sum = books.reduce((acc, book) => {
            return acc + (book.quantity * book.price)
        }, 0)

        return (
            <div>
                Total
                {
                    books.map((book) => {
                        return (
                            <div>
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