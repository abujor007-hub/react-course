import React from 'react'

const Items = () => {
    const age=2;
    const idcard=false;
    const gmail=true;
  return (
    <>
    <div>
        {
  (age >= 18)?(
    <>
    <h1>You can drive</h1>
    </>
  ):(
    <>
    <h1>You are not eligible to drive</h1>
    </>
  )
        }

    </div>

    {idcard && <h1> You can open Bank Account</h1> } 
    {gmail && <h1> You can open Bank Account</h1> } 

    </>
  )
}

export default Items;