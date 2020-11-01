import React, { useState, useEffect } from 'react';
import './App.css';
import { Card } from '@material-ui/core';
import {

    useParams
  } from "react-router-dom";
  
export function ItemDetail(props) {

    const{ fetchKeyboardById, keyboard }=props
    let { id } = useParams();

    useEffect(() => {
        findBoard(id);
      }, []);
    
    async function findBoard(id){
        console.log("hit fun")
        await fetchKeyboardById(id)
      }



  return (
      
    <div>
   
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
              
            </Card>

      </div>
  );
}
