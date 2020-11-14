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
    <div className="grid">
          <ul className="list">
          {keyboards &&
          keyboards.map(keyboard => (
            <li className="list-item">
            <Card raised className="card">
              <div key={keyboard.id || keyboard.name}>
                <Link to = {`/detail/${keyboard.id}`}>
                <div >Name: {keyboard.name}</div>
                </Link>
                <p>Description: {keyboard.description}</p>
                <p>Price: ${keyboard.cost}</p>
                {
                  keyboard.image && <img src={keyboard.image} style={{width: 400}} />
                }
              </div>
              
              
              
              
            </Card>
            </li>
          ))
          }
          </ul>
 </div>
       
          
    </div>
)}