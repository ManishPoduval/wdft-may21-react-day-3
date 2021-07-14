import React, { Component } from 'react'
import {TextField} from '@material-ui/core';


function Search(props) {

    const {onSearch} = props
    return (
        <div>
            <TextField onChange={onSearch} id="standard-basic" label="Search a book" name="search"/>
         </div>
    )
}


export default Search