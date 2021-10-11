import React from 'react'

const HandlingEvents = () => {
    // arrow function must be called only after the declaration
    const clickFunction = () => {
        console.log('clicked!')
    }

    const inputFunction = () => {
        console.log('input clicked!')
    }

    const DBLclickFuntion = () => {
        console.log('double clicked!')
    }
    return (
        <div>
            <input type="text" value="" onClick={inputFunction} placeholder="enter your name"/>
            <button type="button" onClick={clickFunction} onDoubleClick={DBLclickFuntion}> Click me ! </button>
        </div>
    )
}

export default HandlingEvents;
