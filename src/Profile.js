import { Button, TextField, Card } from '@material-ui/core';
export function Profile(props){
    const {myBoards, deleteKeyboard} = props
    return(<div style={{marginBottom: 30}}>
        <h1>PROFILE</h1>
        {
        myBoards.map(keyboard => (
        <Card raised>
        <div key={keyboard.id || keyboard.name}>
          <div>
        <h2>Name: {keyboard.name}</h2>
        <p>Description {keyboard.description}</p>
        <p>Price: ${keyboard.cost}</p>
        <p>Owner: {keyboard.user}</p>
        {
          keyboard.image && <img src={keyboard.image} style={{width: 400}} />
        }
        </div>
        <Button disabled color="primary" variant="contained" onClick={() => deleteKeyboard(keyboard)}>Edit</Button>
        <Button color="secondary" variant="contained" onClick={() => deleteKeyboard(keyboard)}>Delete</Button>
        </div>
        </Card>
        ))
        }
        </div>)}