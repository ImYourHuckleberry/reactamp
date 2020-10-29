import { Button, TextField, Card } from '@material-ui/core';
import {useStyles} from './styles'
export function PostKeyboardForm(props){
    const {onChange,setFormData,formData,createKeyboard} = props
    const classes = useStyles();
    return(
        <div>
          <h1>POST A BOARD FOR SALE</h1>
        < TextField  onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Keyboard name"
        required
        value={formData.name} id="outlined-basic" label="Keyboard Name" variant="outlined" />
<TextField  onChange={e => setFormData({ ...formData, 'description': e.target.value})}
req
        placeholder="Keyboard description"
        value={formData.description} id="outlined-basic" label="Keyboard Description" variant="outlined" />
<TextField onChange={e => setFormData({ ...formData, 'cost': e.target.value})}
        placeholder="Keyboard cost"
        value={formData.cost} id="outlined-basic" label="Keyboard Cost" variant="outlined" />
        
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
<Button variant="contained" color="primary" onClick={createKeyboard}>Upload Keyboard</Button>
</div>
)
}  