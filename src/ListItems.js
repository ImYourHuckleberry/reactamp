import React, { useState, useEffect } from 'react';
import { API, Storage, Auth } from 'aws-amplify';
import { Button, TextField, Card } from '@material-ui/core';
import {useStyles} from './styles'
export function ListItems(props){

    const{keyboards}=props
    const classes = useStyles();

    return(<div style={{marginBottom: 30}}>
        <h1>LIST OF AVAILABLE ITEMS</h1>
{keyboards &&
keyboards.map(keyboard => (
<Card raised>
<div key={keyboard.id || keyboard.name}>
<h2>Name: {keyboard.name}</h2>
<p>Description {keyboard.description}</p>
<p>Price: ${keyboard.cost}</p>
<p>Owner: {keyboard.user}</p>
{
  keyboard.image && <img src={keyboard.image} style={{width: 400}} />
}
</div>
</Card>
))
}
</div>)}