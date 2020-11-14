import React, { useState, useEffect } from 'react';
import { Button, TextField, Card } from '@material-ui/core';
import {useStyles} from './styles'
export function CommentForm(props){
    const {onChange,setReviewData,reviewData,createReview,userId, keyboardId, currentUser} = props
    const classes = useStyles();

    
    return(
        <div>
          <h1>Review</h1>
          <span></span>
            <div>
              <TextField  onChange={e => setReviewData({ ...reviewData, 'starRating': e.target.value})} placeholder="Stars" required value={reviewData.stars} id="outlined-basic" label="Stars" variant="outlined" />
              <TextField  onChange={e => setReviewData({ ...reviewData, 'message': e.target.value})} req placeholder="Review" value={reviewData.reviewBody} id="outlined-basic" label="Review" variant="outlined" />

            </div>
        
            <div>
                <Button variant="contained" color="primary" ><a onClick={e=>(createReview(userId, currentUser, keyboardId))} >Submit Review</a></Button>
            </div>
        


</div>
)
}  