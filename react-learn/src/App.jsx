import logo from './logo.svg';
import './App.css';
import FirstCompo from './FirsComponent';
import React from 'react';
import * as headingObject from './components/Heading';

// * => import all of them as an object 
// jsx 

function App() {

  var headingStyle = {
      color:'red',
      textAlign:'center',
      textDecoration:'underline'
  }

  var fname = "Divyansh";
  var lname = "Dixit";

  console.log(headingObject.x)

  var {HeadingComponent, x, g, add} = headingObject;

  var {fname, lname} = headingObject.x;

  return (
    
    // javascript extension jsx
    // render multiple html element , wrap up in one parent element
    // use <React.Fragment> </React.Fragment>, <> </>, []

    // we can't use JS statement inside jsx, use only expression using {}

    // 'my name is ' + name + ' my age is ' + age
    // template literal es6

    // ternary operator ? : (condition) ? 'true' : 'else'
    
    <>
    
    <div className="calc"> 
        <h1> { `Addition of 10, 20 is ${add(10,20)} `} </h1>
    </div>

      < headingObject.HeadingComponent/>
    {fname} {lname}
    <div>
            <h1 style={headingStyle}> Heading </h1>
            <p style={{color:'blue'}}>  My full name is {fname} {lname}  </p>
            <p>  {` My full name is ${fname} ${lname} `} </p>
           {  (12 > 9) ? `${fname} ${lname}` : 'Nothing'}
            <button type="button" className=""> submit </button>
        
    </div>  
    <FirstCompo/>
    <div>
            <h1 style={headingStyle}> Heading </h1>
        
    </div>    
</>
    /*
    // js 
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Hello world!';

    document.getElementById('root').appendChild(h1)

    // react js 
    React.createElement('div', null, React.createElement('h1', null, React.createElement('span', null, 'Heading')))
    */
  );
}

export default App;
