// import { nanoid } from 'nanoid'
import React, { useState } from 'react'

export default function Educational(props) {
  const [state, setState] = useState({
    dataType: 'educational',
    institution: '',
    qualification: '',
    from: '',
    to: '',
  })

  function handleChange(e) {
    setState(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  function submitData() {
    props.handleData(state);
    setState({
      dataType: 'educational',
      institution: '',
      qualification: '',
      from: '',
      to: '',
    })
  }

  const input = props.data.map((element, index) => {
    return (
      <div key={index} className='info-box'>
        <div className='data-point'>
          <span>Institution:</span>
          <span>{element.institution}</span>
        </div>
        <div className='data-point'>
          <span>Qualification:</span>
          <span>{element.qualification}</span>
        </div>
        <div className='data-point'>
          <span>From:</span>
          <span>{element.from}</span>
        </div>
        <div className='data-point'>
          <span>To:</span>
          <span>{element.to}</span>
        </div>
        <button onClick={() => props.deleteData(index, element.dataType)}>Delete</button>
      </div>
    )
  })


  return (
    <div>
      <h3>Educational Experience</h3>
      <div className='container'>
        <div className='data-point'>
          <label htmlFor="institution">Institution: </label>
          <input id='institution' type="text" value={state.institution} onChange={handleChange} />
        </div>
        <div className='data-point'>
          <label htmlFor="qualification">Qualification: </label>
          <input id='qualification' type="text" value={state.qualification} onChange={handleChange} />
        </div>
        <div className='data-point'>
          <label htmlFor="from">From: </label>
          <input id='from' type="date" onChange={handleChange} value={state.from} />
        </div>
        <div className='data-point'>
          <label htmlFor="to">To: </label>
          <input id='to' type="date" onChange={handleChange} value={state.to} />
        </div>
        <button className='submit' onClick={submitData}>Submit</button>
        <hr />
      </div>
      {input}
    </div>
  )
}

