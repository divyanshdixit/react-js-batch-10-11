import React, { Component } from 'react'

class StateWithConstructor extends Component {
    // state within constructor
    constructor(props){
        super(props); // Parent class constructor.
        // binding 
        this.state = {
            // title: 'Divyansh',
            // inputName:'div',
            // roll_no:this.props.roll_no,
            // city:this.props.city
            color:'green'
        }
        
    }

    // setState(){
    //     return {
    //         title:''
    //     }
    // }

    render() {
        // if(this.state.color != '')
            localStorage.setItem('color', this.state.color)
        return (
            <div>
            <input type="text" onChange={(e)=> console.log(e.target, e.target.value, e)}/>
            <button type="button" data-color="red" value="red" onClick={(e) => { console.log(e.target.dataset.color, e.target.value); this.setState({color:e.target.value})}}> Red Color </button>
            <button type="button" color="blue" value="blue" onClick={(e) => this.setState({color:e.target.value})}> Green Color </button>
                <h1 style={{color:this.state.color}}> Class component with constructor function and props and state - {this.state.title} {this.state.roll_no}</h1>
            </div>
        )
    }
}

export default StateWithConstructor
