import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage, Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listKeyboards, getKeyboard, getUser, listUsers } from './graphql/queries';
import { createKeyboard as createKeyboardMutation, createUser as createUserMutation, deleteKeyboard as deleteKeyboardMutation, createRating as createRatingMutation, updateUser as updateUserMutation, updateUser } from './graphql/mutations';
import {CustomAppBar} from './AppBar';
import { useStyles} from './styles';
import {PostKeyboardForm} from './PostKeyboardForm'
import {ListItems} from './ListItems';
import {ItemDetail} from './ItemDetail';
import {Profile} from "./Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  Redirect
} from "react-router-dom";
import { KeyboardSharp } from '@material-ui/icons';

function App() {
  const initialFormState = { name: '', description: '', userId:'' }
  const initialReviewState = { starRating: '', message: '' }
  const [keyboards, setKeyboards] = useState([]);
  const [keyboard, setKeyboard] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [reviewData, setReviewData] = useState(initialReviewState);
  const [myBoards, setMyBoards]= useState([]);
  const [searchTerm, setSearchTerm]= useState([]);
  const [canRedirect, setRedirect]= useState([]);
  const [user, setUser] = useState([])



  useEffect(() => {
    fetchUsers();
    fetchKeyboards();
    setRedirect(false)
  }, []);

 

  async function fetchKeyboards() {
    const apiData = await API.graphql({ query: listKeyboards });
    const keyboardsFromAPI = apiData.data.listKeyboards.items;
    await Promise.all(keyboardsFromAPI.map(async keyboard => {
      if (keyboard.image) {
        const image = await Storage.get(keyboard.image);
        keyboard.image = image;
      }
      return keyboard;
    }))
    let keyboardData = apiData.data.listKeyboards.items
    if(searchTerm.length)(
      keyboardData=dynamicFilter(keyboardData)
    )

    
    setKeyboards(keyboardData);
  }

  async function fetchUsers() {
    const authUser = await Auth.currentAuthenticatedUser()
    const apiData = await API.graphql({ query: listUsers });
    const usersFromAPI = apiData.data.listUsers.items;
    await Promise.all(usersFromAPI.map(async user => {
      if (user.image) {
        const image = await Storage.get(user.image);
        user.image = image;
      }
      return user;
    }))
    let userData = apiData.data.listUsers.items
    const currentUser = userData.filter(i=> authUser.username === i.name)
    if(currentUser.length){
      await fetchUserById(currentUser[0].id)
    }
    else{
      await createUser(user)
    }
  }

  async function fetchUserById(id){
    const userFromAPI = await API.graphql({query:getUser, variables:{id:id}})
    const user = userFromAPI.data.getUser
    if(user.image){
      user.image = await Storage.get(user.image)
      
    }
    
    setUser(user)
    return user
  }

    async function fetchKeyboardById(id){
      const keyboardFromAPI = await API.graphql({query:getKeyboard, variables:{id:id}})
      const keyboard = keyboardFromAPI.data.getKeyboard
      if(keyboard.image){
        keyboard.image = await Storage.get(keyboard.image)
        
      }
      
      setKeyboard(keyboard)
    
    }
  

  async function createKeyboard() {
    if (!formData.name || !formData.description) return;
    formData.userId = user.id

    await API.graphql({ query: createKeyboardMutation, variables: { input: formData } });
    
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setKeyboards([ ...keyboards, formData ]);
    setFormData(initialFormState);
    setRedirect(true)
  }

  async function createUser(user){
    let formData={name:user.username, email:user.attributes.email}
    await API.graphql({ query: createUserMutation, variables: { input: formData } });

    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    fetchUsers()
    
  }

  async function createReview(userId,currentUser,keyboardId){
  
    reviewData.recievingUserId = userId
    reviewData.keyboardId = keyboardId
    reviewData.givingUserId = user.id


    const item = await API.graphql({ query: createRatingMutation, variables: { input: reviewData } });
 
    const reviewingUser = await fetchUserById(user.id)
    const sellingUser = await fetchUserById(userId)
    console.log(reviewingUser)
    console.log(sellingUser)
    const ratingsGiven = reviewingUser.ratingsGiven ? [...reviewingUser.ratingsGiven, item.data.createdating.id] : [item.data.createRating.id]
    const ratingsRecieved = sellingUser.ratingsRecieved ? [...sellingUser.ratingsRecieved, item.data.createRating.id] :[item.data.createRating.id]
    const reviewerUpdate = {
      id: reviewingUser.id,
      ratingsGiven:ratingsGiven
    }
const seller = {
  id:sellingUser.id,
  ratingsRecieved:ratingsRecieved
}
    
    console.log(sellingUser)
    await API.graphql({ query: updateUserMutation, variables: { input: reviewerUpdate } });
    await API.graphql({ query: updateUserMutation, variables: { input: seller } });
  
    setReviewData(formData)
    setFormData(initialReviewState);

  }


  async function deleteKeyboard({ id }) {
    const newKeyboardsArray = keyboards.filter(keyboard => keyboard.id !== id);
    setKeyboards(newKeyboardsArray);
    await API.graphql({ query: deleteKeyboardMutation, variables: { input: { id } }});
    fetchKeyboards()
  }


  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchKeyboards();
  }
 
  function dynamicFilter(data){
    const substringArray = searchTerm.split(/\W+/).filter((term)=>term.length>0)
    return data.filter((keyboard)=>substringArray.every((substring)=> keyboard.name.toLowerCase().includes(substring.toLowerCase())||keyboard.description.toLowerCase().includes(substring.toLowerCase())))
    
  }

  function editSearch(term){
    setSearchTerm(term)
    fetchKeyboards()
  }



  const classes = useStyles();

  return (
  <Router>
    <div className="App">
      
      <div className={classes.root}>
        <CustomAppBar  editSearch={editSearch}/>
      </div> 
      <div>
        
          <Switch>
            
            <Route exact path="/profile">
              <Profile keyboards={keyboards} user ={user} deleteKeyboard={deleteKeyboard} />
            </Route>

            
           
             <Route exact path="/buy" >
            <ListItems fetchKeyboards={fetchKeyboards} keyboards={keyboards} setKeyboards={setKeyboards} listKeyboards={listKeyboards}  canRedirect={canRedirect} />     
            </Route>
            <Route path="/detail/:id" >
            <ItemDetail keyboard={keyboard} curentUser={user.id} fetchKeyboardById={fetchKeyboardById} fetchUserById={fetchUserById} createReview={createReview} setReviewData={setReviewData} reviewData={reviewData}/>
            </Route>
            
            <Route exact path="/sell" >
            <PostKeyboardForm setFormData={setFormData} onChange={onChange}  createKeyboard={createKeyboard} formData={formData} canRedirect={canRedirect}/>
            </Route>
            
            <Redirect exact from= "/" to="/profile"/>
            
            
          </Switch>
      
      </div>    
        
      
      <AmplifySignOut />
    </div>
    </Router>
  );
}

export default withAuthenticator(App);