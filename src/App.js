import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage, Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listKeyboards } from './graphql/queries';
import { createKeyboard as createKeyboardMutation, deleteKeyboard as deleteKeyboardMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
  const [keyboards, setKeyboards] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchKeyboards();
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
    setKeyboards(apiData.data.listKeyboards.items);
  }

  async function createKeyboard() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createKeyboardMutation, variables: { input: formData } });
    let user = await Auth.currentAuthenticatedUser();

    const { attributes } = user;

    formData.user = attributes.username;
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

  return (
    <div className="App">
      <h1>My Keyboards App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Keyboard name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Keyboard description"
        value={formData.description}
      />
      <input
        onChange={e => setFormData({ ...formData, 'cost': e.target.value})}
        placeholder="Keyboard cost"
        value={formData.cost}
      />
      <input
  type="file"
  onChange={onChange}
/>
      <button onClick={createKeyboard}>Create Keyboard</button>
      <div style={{marginBottom: 30}}>
      {
  keyboards.map(keyboard => (
    <div key={keyboard.id || keyboard.name}>
      <h2>{keyboard.name}</h2>
      <p>{keyboard.description}</p>
      <p>{keyboard.cost}</p>
      <p>{keyboard.user}</p>
      <button onClick={() => deleteKeyboard(keyboard)}>Delete keyboard</button>
      {
        keyboard.image && <img src={keyboard.image} style={{width: 400}} />
      }
    </div>
  ))
}
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);