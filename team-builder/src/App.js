import React, {useState} from 'react';

import Member from './components/Member'
import Form from './components/Form'
import './App.css';

function App() {
  const [membersList, setMembersList] = useState([{name: 'Matthew', email: 'matthew@gmail.com', role: 'Full Stack Web Dev'}])
  const addNewMember = member => {
    setMembersList([...membersList, member])
  }  
  return (
    <div className="App">
      <Member membersList={membersList}/>
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
