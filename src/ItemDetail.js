import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Card } from '@material-ui/core';
import {CommentForm} from './CommentForm'
import {

    useParams
  } from "react-router-dom";
import { SettingsInputSvideoRounded } from '@material-ui/icons';
  
export function ItemDetail(props) {

    const{ fetchKeyboardById, currentUser, keyboard, fetchUserById, createReview, setReviewData, reviewData }=props
    let { id } = useParams();

    useEffect(() => {
        findBoard(id).then(
        findUser(keyboard.userId))
      }, []);
      const [user, setUser] = useState([])


    async function findBoard(id){
        await fetchKeyboardById(id)
      };

    async function findUser(id){
      setUser(await fetchUserById(id))
      
    }



  return (
      
    <div>
   
    <Card raised>
              <div key={keyboard.id || keyboard.name}>
                <div >Name: {keyboard.name}</div>
                <p>Description {keyboard.description}</p>
                <p>Price: ${keyboard.cost}</p>
                <p>Seller: {user.name}</p>
                {
                 keyboard.image && <img src={keyboard.image} style={{width: 400}} />
                }
                
                
              </div>
              <Button>PAYPAL HERE</Button>
            </Card>
            <Card>
              <div>
                Seller Ratings
                <CommentForm createReview={createReview} setReviewData={setReviewData} reviewData={reviewData} currentUser={currentUser} userId={keyboard.userId} keyboardId={keyboard.id}/>
              </div>
            </Card>

      </div>
  );
}
