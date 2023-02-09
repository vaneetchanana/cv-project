import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class General extends Component {
    constructor(props) {
        super(props)
        this.state = {
            general: [{
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
            }]
        }
    }

    edit = id => {
        this.setState(prevState => ({
            general: prevState.general.map(element => ({
                ...element,
                edit: element.id === id ? !element.edit : element.edit
            }))
        }))
    }

    handleChange = (e,id) => {
        this.setState(prevState => ({
            general: prevState.general.map(element => ({
                ...element,
                text : element.id === id ? e.target.value : element.text
            }))
        }))
        // console.log(e.target.value)
    }

    render() {
        // console.log(this.state.general)
        const data = this.state.general
        return (
            <div>
                <h3>General Information</h3>
                {data.map(element => {
                    // console.log(element)
                    return element.edit === true ?
                        <div key={element.id}>
                            <input type="text" value={element.text} onChange={(e) => this.handleChange(e,element.id)} />
                            <button onClick={() => this.edit(element.id)}>Save</button>
                        </div> :
                        <div key={element.id}>
                            <span>{element.text}</span>
                            <button onClick={() => this.edit(element.id)}>Edit</button>
                        </div>
                })}
            </div>
        )
    }
}
