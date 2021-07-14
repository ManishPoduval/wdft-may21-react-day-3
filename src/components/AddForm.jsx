import React from 'react'
import {Button, TextField} from '@material-ui/core';

function AddForm(props) {
    return (
        <form onSubmit={ props.onAddBook } noValidate autoComplete="off">
            <TextField id="standard-basic" label="Title" name="title"/>
            <TextField id="standard-basic" label="Price" name="price"/>
            <Button type="submit" variant="contained" color="primary">
                Insert
            </Button>
        </form>
    )
}

export default AddForm