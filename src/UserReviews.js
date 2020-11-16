import React, { useState, useEffect } from 'react';
import { Button, Card } from '@material-ui/core';
import {useStyles} from './styles'
import { Link } from 'react-router-dom';
import { StarBorderOutlined } from '@material-ui/icons';
import StarIcon from '@material-ui/icons/Star';

export function UserReviews(props){

  
    
    const{  userId, reviews }=props

    const getStars=(stars)=>{
      let starArray=[]
    
      for(let i =1; i<6; i++){
        if(stars < i){
          starArray.push(<StarBorderOutlined id={i} />)}
        else{
          starArray.push(<StarIcon id={i} ></StarIcon>)
        }
         
      }
      return starArray
    }
    
   
    

console.log(reviews)
    return(
    <div style={{marginBottom: 30}}>
        <h1>Seller Reviews</h1>
        {
        reviews.map(review => (
        <Card raised>
        
          <div>
          <p>rating {getStars(review.starRating)}</p>
        <h2>message: {review.message}</h2>
        
       
        </div>
        
        </Card>
        ))
        }
          
    </div>
)}