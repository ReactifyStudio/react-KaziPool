import React,{useState} from 'react';
// import Rating from '@bit/nexxtway.react-rainbow.rating';


function Rating(){
    const [rating,setRating]=useState(0)

    const handleRating=(e)=>{
        setRating(e.target.value)
    }

    return(
        <Rating style={{border:'none'}} 
            value={rating}
            onChange={handleRating}/>
    )
}

export default Rating