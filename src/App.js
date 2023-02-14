
import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import Educational from './components/Educational';
import Practical from './components/Practical';
import General from './components/General';
import './App.css'

function App() {
  const [state, setState] = useState({
    general : [{
      text: 'First Name',
      edit: false,
      id: nanoid()
  },
  {
      text: "Last Name",
      edit: false,
      id: nanoid()
  },
  {
      text: "Email",
      edit: false,
      id: nanoid()
  },
  {
      text: "Phone Number",
      edit: false,
      id: nanoid()
  }],
    educational : [],
    professional : []
  })
  return (
    <div className="App">
      <h1>CV Application</h1>
      <General />
      <Educational />
      <Practical />
    </div>
  );
}

export default App;
