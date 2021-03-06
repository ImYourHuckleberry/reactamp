import { Button, TextField, Card } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import {useStyles} from './styles'
export function PostKeyboardForm(props){
    const {onChange,setFormData,formData,createKeyboard,canRedirect} = props
    const classes = useStyles();
    return(
        <div>
          <h1>POST A BOARD FOR SALE</h1>
          <span></span>
            <div>
              <TextField style={{margin:'8px'}} onChange={e => setFormData({ ...formData, 'name': e.target.value})} placeholder="Keyboard name" required value={formData.name} id="outlined-basic" label="Keyboard Name" variant="outlined" />
              <TextField style={{margin:'8px'}} onChange={e => setFormData({ ...formData, 'description': e.target.value})} req placeholder="Keyboard description" value={formData.description} id="outlined-basic" label="Keyboard Description" variant="outlined" />
              <TextField style={{margin:'8px'}} onChange={e => setFormData({ ...formData, 'cost': e.target.value})} placeholder="Keyboard cost" value={formData.cost} id="outlined-basic" label="Keyboard Cost" variant="outlined" />
            </div>

            <div className="imageUpload">
                <input
                  accept="image/*"
                  className="picInput"
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={onChange}
                />
                <label htmlFor="raised-button-file">
                  <Button variant="contained" color="primary" component="span" className="pictureButton">
                    Upload a Picture
                  </Button>
                </label> 
            </div>
        
            <div>
                <Button variant="contained" color="primary" ><a onClick={createKeyboard} >Upload Keyboard</a></Button>
            </div>
            {canRedirect===true?<Redirect push to="/buy"/>:null}


</div>
)
}  