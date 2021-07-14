import React, { Component } from 'react'


function Total(props) {

    const {books} = props

    // Calculate the sum here
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


export default Total