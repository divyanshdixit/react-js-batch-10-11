import logo from './logo.svg';
import './App.css';
import FirstCompo from './FirsComponent';
import React from 'react';
import {Add} from './components/Calculator';
import * as headingObject from './components/Heading';
import * as calcObject from './components/Calculator';
import {Card} from './components/CardComponent';

// * => import all of them as an object 
// jsx 

function App() {

  var headingStyle = {
      color:'red',
      textAlign:'center',
      textDecoration:'underline'
  }
  var cardObj = {
    card_no:1,
    name:'First Card'
  }

  var fname = "Divyansh";
  var lname = "Dixit";

  console.log(headingObject.x)

// obeject destructruing :
  var {HeadingComponent, x, g, add} = headingObject;

  // var {Add} = calcObject;
  var {fname, lname} = headingObject.x;

  return (
    
    <>
    <Add x={10} y="20" z="4"/>
    {/* {Add(1,2)} */}
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

    <Card title={cardObj} key="1" description="Card description" link="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" imgTitle="Tree"/>   
    <Card title={cardObj} key="2" description="Card description1" link="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" imgTitle="Tree"/>   
    

    {/* <Card1 title="Card title one" description="Card description one" link="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" imgTitle="Tree"/>    */}
    
  </>


    /*
    // javascript extension jsx
    // render multiple html element , wrap up in one parent element
    // use <React.Fragment> </React.Fragment>, <> </>, []

    // we can't use JS statement inside jsx, use only expression using {}

    // 'my name is ' + name + ' my age is ' + age
    // template literal es6

    // ternary operator ? : (condition) ? 'true' : 'else'
    
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
