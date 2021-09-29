// React component

// functional , class 

import React from 'react';

function HeadingComponent(){

    return(
        <>
            <p> First heading component  </p>
        </>
    )
}

function add(x,y){
    var res = Number(x) + Number(y);
    return res; // 9
}


var x  = {
    fname:'Divyanhs',
    lname:'Dixit'
};
const g = "asdas";



// export default HeadingComponent
export { HeadingComponent, x, g, add };


// var x = 10; // global scope, global object => window

// this always refres to owner object (in this case window)

// const Heading = () => {
//     return this
// }


