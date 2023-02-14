import React, { useState } from 'react'

export default function Educational() {
  const [state, setState] = useState({
    institution: '',
    qualification: '',
    from: '',
    to: ''
  })

  function handleChange(e) {
    setState(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))


  }

  function handleData() {
    console.log(state);
  }


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
          <input id='from' type="date" onChange={handleChange} />
        </div>
        <div className='data-point'>
          <label htmlFor="to">To: </label>
          <input id='to' type="date" onChange={handleChange} />
        </div>
        <button className='submit' onClick={handleData}>Submit</button>
        <hr />
      </div>
    </div>
  )
}

