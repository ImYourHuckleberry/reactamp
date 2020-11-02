import React from 'react';
import { Button, Card } from '@material-ui/core';
import {useStyles} from './styles'
import { Link } from 'react-router-dom';
export function ListItems(props){

    const{keyboards, canRedirect }=props
    const classes = useStyles();

    


    return(
    <div style={{marginBottom: 30}}>
        <h1>LIST OF AVAILABLE ITEMS</h1>
          {keyboards &&
          keyboards.map(keyboard => (
            <Card raised>
              <div key={keyboard.id || keyboard.name}>
                <div >Name: {keyboard.name}</div>
                <p>Description {keyboard.description}</p>
                <p>Price: ${keyboard.cost}</p>
                <p>Owner: {keyboard.user}</p>
                {
                  keyboard.image && <img src={keyboard.image} style={{width: 400}} />
                }
              </div>
              <Link to = {`/detail/${keyboard.id}`}>
              <Button color="primary" variant="contained" >Buy</Button>
              </Link>
              
            </Card>
          ))
          }
          
    </div>
)}