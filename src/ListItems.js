import React from 'react';
import { Button, Card } from '@material-ui/core';
import {useStyles} from './styles'
import { Redirect } from 'react-router-dom';
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
                {canRedirect===true?<Redirect to={`/detail/${keyboard.id}`}/>:null}
              </div>
              {/* <Button color="primary" variant="contained" onClick={() => <a href = {'/detail/${}'}>}>Buy</Button> */}
            </Card>
          ))
          }
          
    </div>
)}