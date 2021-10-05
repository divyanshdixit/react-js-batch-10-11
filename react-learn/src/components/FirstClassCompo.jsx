// 16.8 version 

// stateless 

// js 

// life cycle method
import {Component} from 'react';

class FirstClassComponent extends Component{ // 
    // empty constructor function 
    // state: simliar to props but it's private and it is fully controlled by component.
    // we can create state only in class compo.
    // we can update the value of state.

    // define state without constructor:
    
    state = { // it's class property
        name: 'Divyansh',
        roll_no:this.props.roll_no,
        city:this.props.city
    }
    
    render(){
        const {name, roll_no, city} = this.state;

        return(
            <>  
                <h1> First Class component </h1>
                <h2> Reading state value - {name}, {roll_no} {city}</h2>
            </>
        )
    }
}

export default FirstClassComponent;