import React from 'react';
import { Button, Card } from '@material-ui/core';
import {useStyles} from './styles'
import { Link } from 'react-router-dom';
export function ListItems(props){

    const{keyboards, canRedirect }=props
    // const classes = useStyles();

    


    return(
    <div style={{marginBottom: 30}}>
        <h1>LIST OF AVAILABLE ITEMS</h1>
    <div className="grid">
          <ul className="list">
          {keyboards &&
          keyboards.map(keyboard => (
            <ul className="list-item">
            <div raised className="card">
              <div key={keyboard.id || keyboard.name} className='itemCard'>
                
                <h1 >Name: {keyboard.name}</h1>
                
                <h2>Description: {keyboard.description}</h2>
                <h3>Price: ${keyboard.cost}</h3>
                {
                  keyboard.image && <img src={keyboard.image} style={{width: 400}} className="image"/>
                }
                <Link to = {`/detail/${keyboard.id}`}>
                <div className="itemDetailButton"><Button color="primary" variant="contained">Buy</Button></div>
                </Link>
              </div>
              
            </div>
            
            </ul>
          ))
          }
          </ul>
 </div>
       
          
    </div>
)}