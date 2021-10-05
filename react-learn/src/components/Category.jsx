import React from 'react'

const Category = (props) => {
    console.log(props.main)
    // props can't be changed to overcome this prob we use states in calss component 
    // props.main = 'changed';
    // console.log(props.main)
    return (
        <div>
            <h1> You selected Main- {props.main} category and Sub- {props.sub}</h1>
        </div>
    )
}

export default Category
