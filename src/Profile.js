import { Button, Card } from '@material-ui/core';
export function Profile(props){
    const {keyboards, user, deleteKeyboard} = props
    const myBoards = keyboards.filter(keyboard=>keyboard.userId === user.id)
    return(
    <div style={{marginBottom: 30}}>
        <h1>PROFILE</h1>
        {
        <div className="grid">
        <ul className="list">
        {keyboards &&
        myBoards.map(keyboard => (
          <ul className="list-item">
          <div raised className="card">
            <div key={keyboard.id || keyboard.name} className='itemCard'>
              <h1 >Name: {keyboard.name}</h1>
              <h2>Description: {keyboard.description}</h2>
              <h3>Price: ${keyboard.cost}</h3>
              {
                keyboard.image && <img src={keyboard.image} style={{width: 400}} className="image"/>
              }
            </div>
            <Button disabled color="primary" variant="contained" onClick={() => deleteKeyboard(keyboard)}>Edit</Button>
                      <Button color="secondary" variant="contained" onClick={() => deleteKeyboard(keyboard)}>Delete</Button>
                 
            
            
            
          </div>
          </ul>
        ))
        }
        </ul>
        </div>
        }
        </div>)}