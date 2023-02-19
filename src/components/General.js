import React from 'react';
import { nanoid } from 'nanoid';
import '../styels/General.css'

export default function General(props) {

    const {data, edit, handleChange} = props

    // const [state, setState] = React.useState([{
    //     text: 'First Name',
    //     edit: false,
    //     id: nanoid()
    // },
    // {
    //     text: "Last Name",
    //     edit: false,
    //     id: nanoid()
    // },
    // {
    //     text: "Email",
    //     edit: false,
    //     id: nanoid()
    // },
    // {
    //     text: "Phone Number",
    //     edit: false,
    //     id: nanoid()
    // }])



    // const edit = id => {
    //     setState(prevState => {
    //         return prevState.map(element => ({
    //             ...element,
    //             edit: element.id === id ? !element.edit : element.edit
    //         }))
    //     })
    // }

    

    return (
        <div className='general'>
            <h3 className='heading'>General Information</h3>
            <div className='container'>
                {data.map(element => {
                    return element.edit === true ?
                        <div key={element.id} className='data-point'>
                            <input type="text" value={element.text} onChange={(e) => handleChange(e, element.id)} />
                            <button onClick={() => edit(element.id)}>Save</button>
                        </div> :
                        <div key={element.id} className='data-point'>
                            <span>{element.text}</span>
                            <button onClick={() => edit(element.id)}>Edit</button>
                        </div>
                })}
                <hr />
            </div>
        </div>
    )
}
