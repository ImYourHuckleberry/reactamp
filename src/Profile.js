import { Button, TextField, Card } from '@material-ui/core';
export function Profile(props){
    const {myBoards} = props
    return(<div style={{marginBottom: 30}}>
        <h1>PROFILE</h1>
        {
        myBoards.map(keyboard => (
        <Card raised>
        <div key={keyboard.id || keyboard.name}>
        <h2>Name: {keyboard.name}</h2>
        <p>Description {keyboard.description}</p>
        <p>Price: ${keyboard.cost}</p>
        <p>Owner: {keyboard.user}</p>
        {
          keyboard.image && <img src={keyboard.image} style={{width: 400}} />
        }
        </div>
        </Card>
        ))
        }
        </div>)}