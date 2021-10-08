// start today
// introduced in 16.8
// not work in class component (life cycle methods, state)


// const context = useContext(contextValue);

// Redux => sepratly manage the state => using store

// states in functional:

// use hook always inside the compoennt:
// useState()

import React, {useState} from 'react';
import StateWithConstructor from '../StateWithConstructor';

function name(){
    return 'code';
}

function ComponentWithHook(){
    const [color, setColor] = useState('black');
    const [title, setTitle] = useState({
        heading:'',
        count:0
    });
 
    // var count = 0;
    
    // var state = 'black';
    // var check =  true;
    // if(check){
    //     setTimeout( () => {
    //         console.log('object')
    //         state = 'green';
    //         check = false;
            
    //         // setColor('red')
    //         // console.log(state);
    //     }, 2000)
    // }
    const changeTitle = (e) => {
        console.log(e)
        // setTitle(prev => {
        //     console.log(prev);
        //     return {
        //             heading:`new heading ${prev.count}`,
        //             count: prev.count + 1
        //         }
        //     });
        const {name, value} = e.target;
        setTitle((prev) =>{
            console.log(prev, {...prev});
            return {
                ...prev,
                [name]:name + 1
            }
        })
        // count++;
    }
    return(

        <>
            <h1> {color}</h1>
            <h2> {title.heading} </h2>
            <button type="button" name="count" onClick={changeTitle}> Change title </button>
            {/* {setTimeout( () => ComponentWithHook(), 2000)} */}
        </>
    )
}

export default ComponentWithHook;