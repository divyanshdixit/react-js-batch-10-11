import React, {useState} from 'react'


function name (fname='defalut'){
    console.log(fname);
}

name('divyansh');

const HandlingEvents = () => {

    const [inputVal, setinputVal] = useState('');
    // arrow function must be called only after the declaration
    const clickFunction = () => {

        console.log('clicked!');
        console.log(inputVal);
    }

    const inputFunction = (e) => {
        console.log(e.target.defaultValue);
        console.log('input clicked!')
    }

    const DBLclickFuntion = () => {
        console.log('double clicked!')
    }

    const changeValue = (e) => {
        console.log(inputVal, e);
        console.log(e.target.value);
        const val = e.target.value;
        document.getElementById('demo')
        setinputVal(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault(); // stop the default behvaior of current event.
        console.log(e);
        // console.log(inputVal);
        const fullName = inputVal;
        console.log(fullName);
        // setupdateName(inputVal);
        // console.log(updateName);

    }

    return (
        <div>
            <h1> {inputVal} </h1>
            <form /*onSubmit={submitForm}*/>
                <input type="text" value={inputVal} defaultValue="Divyansh" onChange={changeValue} onClick={inputFunction} placeholder="enter your name"/>
                <button type="button" onClick={clickFunction} onDoubleClick={DBLclickFuntion}> Click me ! </button>
            </form>
        </div>
    )
}

export default HandlingEvents;
