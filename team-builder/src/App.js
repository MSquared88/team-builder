import React, {useState} from 'react';

import Member from './components/Member'
import Form from './components/Form'
import './App.css';

function App() {
  const [membersList, setMembersList] = useState([{name: '', email: '', role: ''}])
  const addNewMember = newMember => {
    setMembersList([...membersList, newMember])
  }  
  return (
    <div className="App">
      <Member membersList={membersList}/>
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
