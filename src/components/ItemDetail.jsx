import React from 'react'
import {Button, TextField} from '@material-ui/core';


function ItemDetail(props) {
    
    const {myBook, handleAddTotal} = props
    return (
        <form onSubmit={(event) => { handleAddTotal(event, myBook)  }} noValidate autoComplete="off">
            <p name="title">{myBook.title}</p>
            <h4 name="price">$ {myBook.price}</h4>
            <TextField id="standard-basic" label="Quantity" name="quantity"/>
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
        </form>
    )
}


export default ItemDetail