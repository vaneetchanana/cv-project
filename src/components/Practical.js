import React from 'react'

export default function Practical() {
  const [state, setState] = React.useState({
    companyName: '',
    title: '',
    tasks: '',
    experience: ''
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
    <div >
      <h3 className='heading'>Practical Experience</h3>
      <div className='container'>
        <div className='data-point'>
          <label htmlFor="companyName">Company Name </label>
          <input type="text" id="companyName" value={state.companyName} onChange={handleChange} />
        </div>
        <div className='data-point'>
          <label htmlFor="title">Title </label>
          <input type="text" id="title" value={state.title} onChange={handleChange} />
        </div>
        <div className='data-point'>
          <label htmlFor="tasks">Tasks </label>
          <input type="text" id="tasks" value={state.tasks} onChange={handleChange} />
        </div>
        <div className='data-point'>
          <label htmlFor="experience">Year Experience </label>
          <input type="text" id="experience" value={state.experience} onChange={handleChange} />
        </div>
        <button className='submit' onClick={handleData}>Submit data</button>
      </div>
    </div>
  )
}
