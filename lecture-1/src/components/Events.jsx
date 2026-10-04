import React from 'react'

const Events = () => {

    const showAlert =()=>{
        alert('Button Clicked')
    }

    const light =()=>{
        document.body.style.backgroundColor = 'white'
        document.body.style.color ='black'
    }
    const dark =()=>{
        document.body.style.backgroundColor ='black'
        document.body.style.color ='white'
    }
let count =0;
    const counter =()=>{
        
        count++;

    }
  return (
    <>
    <h1>counter</h1>
    <h1>Events</h1>
    <button onClick={showAlert}>Click Me</button>
    <button onClick={light}>Light</button>
    <button onClick={dark}>Dark</button>
    <button onClick={counter}>Counter</button>
    </>
  )
}

export default Events