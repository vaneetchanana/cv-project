
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Educational from './components/Educational';
import Practical from './components/Practical';
import General from './components/General';
import './App.css'

function App() {
  const [state, setState] = useState({
    general: [{
      text: "First Name",
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
    educational: [],
    professional: []
  })


  const [cvEdit, setCvEdit] = useState(true);

  const edit = id => {
    setState(prevState => ({
      ...prevState,
      general: prevState.general.map(element => ({
        ...element,
        edit: element.id === id ? !element.edit : element.edit
      }))
    }))
  }

  const handleChange = (e, id) => {
    setState(prevState => ({
      ...prevState,
      general: prevState.general.map(element => ({
        ...element,
        text: element.id === id ? e.target.value : element.text
      }))
    }))
  }

  const handleData = (data) => {
    setState(prevState => ({
      ...prevState,
      [data.dataType]: [...prevState[data.dataType], data]
    }))
  }

  const printData = () => {
    console.log(state);
  }

  const cvEditing = () => {
    setCvEdit(prevState => !prevState)
  }

  const deleteData = (id, dataType) => {
    setState(prevState => ({
      ...prevState,
      [dataType] : prevState[dataType].filter((element,index) => {
        return index !== id
      })
    }))

  }


  return (
    <div className="App">
      <h1 className='App-heading'>CV Application</h1>
      <button onClick={cvEditing}>{cvEdit ? 'Show CV' : 'Edit CV'}</button>
      {
        cvEdit ?
          <div>
            <General data={state.general} edit={edit} handleChange={handleChange} />
            <Educational handleData={handleData} data={state.educational} deleteData={deleteData} />
            <Practical handleData={handleData} data={state.professional} deleteData={deleteData} />
          </div> :
          <div>Here is your cv</div>
      }
      <button onClick={printData}>Print Data</button>
    </div>
  );
}

export default App;
