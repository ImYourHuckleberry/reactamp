import React, { useState, useEffect } from 'react';
import { Button, TextField, Card } from '@material-ui/core';
import {useStyles} from './styles'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { StarBorderOutlined } from '@material-ui/icons';
import StarIcon from '@material-ui/icons/Star'; 
import { TextareaAutosize } from '@material-ui/core';
export function CommentForm(props){
    const {onChange,setReviewData,reviewData,createReview,userId, keyboardId, currentUser, reviews} = props
   
  
  const [rating, setRating] = useState([])
  
 const handleRatingsChange=(i)=>{
  
  console.log(i)
  console.log(Number(i))
  setReviewData({ ...reviewData, 'starRating': Number(i)})
  console.log(reviewData)
  setRating(i)
}

const getStars=()=>{
  let stars=[]

  for(let i =1; i<6; i++){
    if(rating < i){
    stars.push(<StarBorderOutlined id={i} onClick={()=>handleRatingsChange(i)}/>)}
    else{
      stars.push(<StarIcon id={i} onClick={()=>handleRatingsChange(i)}></StarIcon>)
    }
     
  }
  return stars
}

    return(
        <div className="commenform">
          <h3>Leave a Review</h3>
          <div className="stars">
              {getStars()}
              </div>
          <span></span>
            <div className='review'>
              
              <TextareaAutosize rowsMin="10"  onChange={e => setReviewData({ ...reviewData, 'message': e.target.value})} req placeholder="Let me know what you think..." value={reviewData.reviewBody} id="outlined-basic" label="Review" variant="outlined" className="comment" />

            </div>
        
            <div>
                <Button variant="contained" color="primary" style={{margin:"20px"}}><a onClick={e=>(createReview(userId, currentUser, keyboardId))} >Submit Review</a></Button>
            </div>
        


</div>
)
}  