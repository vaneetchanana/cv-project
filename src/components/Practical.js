import React from 'react'

export default function Practical(props) {
  const [state, setState] = React.useState({
    dataType: 'professional',
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

  function submitData() {
    props.handleData(state);
    setState({
      dataType: 'professional',
      companyName: '',
      title: '',
      tasks: '',
      experience: ''
    })
  }


  const input = props.data.map((element, index) => {
    return (
      <div key={index} className='info-box'>
        <div className='data-point'>
          <span>Company Name:</span>
          <span>{element.companyName}</span>
        </div>
        <div className='data-point'>
          <span>Title:</span>
          <span>{element.title}</span>
        </div>
        <div className='data-point'>
          <span>Tasks:</span>
          <span>{element.tasks}</span>
        </div>
        <div className='data-point'>
          <span>Experience:</span>
          <span>{element.experience}</span>
        </div>
        {props.cvEdit && <button onClick={() => props.deleteData(index, element.dataType)}>Delete</button>}
      </div>
    )
  })

  return (
    <div >
      <h3 className='heading'>Practical Experience</h3>
      {props.cvEdit && <div className='container'>
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
        <button className='submit' onClick={submitData}>Submit</button>
        <hr />
      </div>}
      {input}
    </div>
  )
}
