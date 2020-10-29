import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage, Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listKeyboards,listKeyboardNames } from './graphql/queries';
import { createKeyboard as createKeyboardMutation, deleteKeyboard as deleteKeyboardMutation } from './graphql/mutations';
import {CustomAppBar} from './AppBar'
import { useStyles} from './styles'
import { fade, makeStyles } from '@material-ui/core/styles';
import {PostKeyboardForm} from './PostKeyboardForm'
import {ListItems} from './ListItems'
import {Profile} from "./Profile"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { KeyboardSharp } from '@material-ui/icons';

function App() {
  const initialFormState = { name: '', description: '' }
  const [keyboards, setKeyboards] = useState([]);
  const [keyboardNames, setKeyboardNames] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [myBoards, setMyBoards]= useState([]);
  const [searchTerm, setSearchTerm]= useState([]);



  useEffect(() => {
    fetchKeyboards();
    fetchKeyboardNames();
  }, []);

  async function fetchKeyboards() {
    const user = await Auth.currentAuthenticatedUser()
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
    console.log(searchTerm)
    if(searchTerm.length)(
      keyboardData=dynamicFilter(keyboardData)
    )
    setMyBoards(apiData.data.listKeyboards.items.filter(keyboard=>keyboard.user===user.username))
    setKeyboards(keyboardData);
  }

  async function fetchKeyboardNames() {
      const apiData = await API.graphql({ query: listKeyboardNames });
      const names = apiData.data.listKeyboards.items;
      setKeyboardNames(names)
    }

  

  async function createKeyboard() {
    if (!formData.name || !formData.description) return;

    let user = await Auth.currentAuthenticatedUser();
    console.log(user)

    formData.user = user.username;
    await API.graphql({ query: createKeyboardMutation, variables: { input: formData } });
    

    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setKeyboards([ ...keyboards, formData ]);
    setFormData(initialFormState);
  }

  async function deleteKeyboard({ id }) {
    const newKeyboardsArray = keyboards.filter(keyboard => keyboard.id !== id);
    setKeyboards(newKeyboardsArray);
    await API.graphql({ query: deleteKeyboardMutation, variables: { input: { id } }});
  }

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchKeyboards();
  }
 
  function dynamicFilter(data){
    console.log(data)
    const substringArray = searchTerm.split(/\W+/).filter((term)=>term.length>0)
    console.log(substringArray)
    return data.filter((keyboard)=>substringArray.every((substring)=> keyboard.name.toLowerCase().includes(substring.toLowerCase())||keyboard.description.toLowerCase().includes(substring.toLowerCase())))
    
  }

  function editSearch(term){
    console.log("hit")
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
              <Profile myBoards={myBoards}/>
            </Route>
            <Route exact path="/buy" >
            <ListItems fetchKeyboards={fetchKeyboards} keyboards={keyboards} setKeyboards={setKeyboards} listKeyboards={listKeyboards}/>     
            </Route>
            
            <Route exact path="/sell" >
            <PostKeyboardForm setFormData={setFormData} onChange={onChange} createKeyboard={createKeyboard} formData={formData}/>
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