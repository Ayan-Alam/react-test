import { useState } from "react";

function Card(){
    const [ID,setID] = useState("");
    const [Price,setPrice] = useState("");
    const [Name,setName] = useState("");
    function getID(event){
        setID(event.target.value);
    }
    function getPrice(event){
        setPrice(event.target.value);
    }
    function getName(event){
        setName(event.target.value);
    }
    function getDetail(){
        let details = {
            "id" : ID,
            "price" : Price,
            "name" : Name,
        }
        localStorage.setItem(ID,details);
    }
    return(
        <form onSubmit={(event)=>{event.preventDefault()}}>
        <label>Product ID</label>
        <input type='number'placeholder='Enter amount' onChange={getID}/>
        <label>Price</label>
        <input type='number'placeholder='Enter Price' onChange={getPrice}/>
        <label>Product Name</label>
        <input type='text'placeholder='Enter Name' onChange={getName}/>
        <button onClick={getDetail}>Add</button>
        </form>
    );
}

export default Card;