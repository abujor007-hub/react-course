import React from 'react'
import {useLocation, useParams, useNavigate} from 'react-router-dom'

const Dynamic_User = () => {
  const {slug} = useParams()
  const navigate = useNavigate()
   const user = [
    {id:1, name:'abujor',gmail:'abujor@gmail.com'},
    {id:2, name:'ariayn',gmail:'ariayn@gmail.com'},
    {id:3, name:'nabil',gmail:'nabil@gmail.com'},
    {id:4, name:'aburouha',gmail:'aburouha@gmail.com'},
  ]

  const currentUser = user.find(u => u.name === slug)
  const location =useLocation();

  return (
    <div>
      <h2>Slug: {slug}</h2>
      {currentUser ? (
        <div>
          <p>Name: {currentUser.name}</p>
          <p>Email: {currentUser.gmail}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
 <button onClick={() => navigate('/')}>Go Back</button>

    </div>
  )
}

export default Dynamic_User;