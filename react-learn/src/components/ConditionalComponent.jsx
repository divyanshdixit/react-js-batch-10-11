import Category from "./Category";

/*
statement
if(){

}else if(){

}else if(){

}else{

}

expression
(cond1) ? ' ' : ( (cond2) ? '' : '' )
*/

// all arrow function are anonymous function
const ShowCategory = () => {

    var foodCateogry = "nveg";
    var subCategory = 'panner';
    if(foodCateogry === 'veg'){
        return (
        <>
            {(subCategory == 'egg') ? <Category main="Veg" sub="egg"/> : <Category name="Veg" sub="panner"/>}
            
        </>
        )
    }else{
        
        return (
            // only expression can be used
        <>
            {(subCategory == 'egg') ? <Category main="Non-Veg" sub="egg"/> : <Category main="Non-Veg" sub="panner"/>}

        </>
        )
    }
    

    
}

export default ShowCategory;