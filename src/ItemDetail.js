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
   
    <Card raised style={{margin:'8px'}}>
              <div key={keyboard.id || keyboard.name} className="itemDetail"> 
              <div>
              {
                 keyboard.image && <img src={keyboard.image} style={{width: 400}} />
                }</div>
                <div>
                <h1 >{keyboard.name}</h1>
                <h2>Description: {keyboard.description}</h2>
                <h3>Seller: {user.name}</h3>
               </div>
                
                
              </div>
              <PaypalButton name={keyboard.name} cost={keyboard.cost}></PaypalButton>
            </Card>
            <Card style={{margin:'8px'}}>
              <div>
                <CommentForm reviews={reviews} createReview={createReview} setReviewData={setReviewData} reviewData={reviewData} currentUser={currentUser} userId={user.id} keyboardId={keyboard.id} fetchReviews={fetchReviews}/>
              </div>
            </Card>
            <Card style={{margin:'8px'}}>
              <div> 
               {user.id && reviews && <UserReviews reviews={reviews} userId={user.id} />}
              </div> 
            </Card>

      </div>
  );
}
