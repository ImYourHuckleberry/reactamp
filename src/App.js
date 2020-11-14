import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage, Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listKeyboards,listKeyboardNames, getKeyboard } from './graphql/queries';
import { createKeyboard as createKeyboardMutation, deleteKeyboard as deleteKeyboardMutation } from './graphql/mutations';
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
  const initialFormState = { name: '', description: '' }
  const [keyboards, setKeyboards] = useState([]);
  const [keyboard, setKeyboard] = useState([]);
  const [keyboardNames, setKeyboardNames] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [myBoards, setMyBoards]= useState([]);
  const [searchTerm, setSearchTerm]= useState([]);
  const [canRedirect, setRedirect]= useState([]);



  useEffect(() => {
    fetchKeyboards();
    fetchKeyboardNames();
    setRedirect(false)
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

    async function fetchKeyboardById(id){
      console.log("broke?")
      const keyboardFromAPI = await API.graphql({query:getKeyboard, variables:{id:id}})
      console.log(keyboardFromAPI)
      const keyboard = keyboardFromAPI.data.getKeyboard
      console.log(keyboard)
      if(keyboard.image){
        keyboard.image = await Storage.get(keyboard.image)
        
      }
      
      setKeyboard(keyboard)
    
    }
  

  async function createKeyboard() {
    if (!formData.name || !formData.description) return;

    let user = await Auth.currentAuthenticatedUser();
    console.log(user)

    formData.user = user.username;
    await API.graphql({ query: createKeyboardMutation, variables: { input: formData } });
    console.log(formData)

    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setKeyboards([ ...keyboards, formData ]);
    setFormData(initialFormState);
    setRedirect(true)
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
              <Profile myBoards={myBoards} deleteKeyboard={deleteKeyboard} />
            </Route>

            
           
             <Route exact path="/buy" >
            <ListItems fetchKeyboards={fetchKeyboards} keyboards={keyboards} setKeyboards={setKeyboards} listKeyboards={listKeyboards}  canRedirect={canRedirect} />     
            </Route>
            <Route path="/detail/:id" >
            <ItemDetail keyboard={keyboard} fetchKeyboardById={fetchKeyboardById}/>
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