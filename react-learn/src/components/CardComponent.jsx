
// object are varaible too 

function Card({title, description, link, imgTitle}){
    return (

        <>
            
            <h1> {title.card_no} </h1>
            <p> {title.name}</p>
            <p> {description} </p>
            <img src={link} width={100} title={imgTitle}/>
        </>
    )
}

var x = 10; // reference == value
var y = 20;

function Card1({title, description, link, imgTitle}){
    return (

        <>
            <p> {title} </p>
            <p> {description} </p>
            <img src={link} width={100} title={imgTitle}/>
        </>
    )
}

export {Card, Card1, x, y};