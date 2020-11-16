import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Card } from '@material-ui/core';
import {CommentForm} from './CommentForm'
import {UserReviews} from './UserReviews'
import { API } from 'aws-amplify';
import { listRatings } from './graphql/queries';
import {

    useParams
  } from "react-router-dom";
import { SettingsInputSvideoRounded } from '@material-ui/icons';
import PaypalButton from './PaypalButton';
  
export function ItemDetail(props) {

    const{ fetchKeyboardById, currentUser, fetchUserById, createReview, setReviewData, reviewData }=props
    let { id } = useParams();

    useEffect(() => {
        findBoard()
        fetchReviews();
      }, []);
      const [user, setUser] = useState([])
      const [keyboard, setKeyboard] = useState([])
      const [reviews, setReviews] = useState([])

    async function findBoard(){
        let keyboardData = await fetchKeyboardById(id)
        setKeyboard(keyboardData)
        let userData= await fetchUserById(keyboardData.userId)
        
        setUser(userData)
      };
      
   
  
        async function fetchReviews() {
          const apiData = await API.graphql({ query: listRatings });
          setReviews(apiData.data.listRatings.items)
        }




  return (
      
    <div>
   
    <Card raised>
              <div key={keyboard.id || keyboard.name}>
                <div >Name: {keyboard.name}</div>
                <p>Description {keyboard.description}</p>
                <p>Seller: {user.name}</p>
                {
                 keyboard.image && <img src={keyboard.image} style={{width: 400}} />
                }
                
                
              </div>
              <PaypalButton name={keyboard.name} cost={keyboard.cost}></PaypalButton>
            </Card>
            <Card>
              <div>
                Rate Seller
                <CommentForm reviews={reviews} createReview={createReview} setReviewData={setReviewData} reviewData={reviewData} currentUser={currentUser} userId={user.id} keyboardId={keyboard.id}/>
              </div>
            </Card>
            <Card>
              <div>
                Reviews
               {user.id && reviews && <UserReviews reviews={reviews} userId={user.id} />}
              </div> 
            </Card>

      </div>
  );
}
