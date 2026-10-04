import React from 'react'
import {Link} from 'react-router-dom'

const User = () => {
  const user = [
    {id:1, name:'abujor',gmail:'abujor@gmail.com'},
    {id:2, name:'ariayn',gmail:'ariayn@gmail.com'},
    {id:3, name:'nabil',gmail:'nabil@gmail.com'},
    {id:4, name:'aburouha',gmail:'aburouha@gmail.com'},
  ]

  return(
    <>
    {user.map((data) => (
      <div key={data.id}>
        <Link to={`/user/${data.name}`}>
          <h3>{data.name}</h3>
        </Link>
      </div>
    ))}
    </>
  )
}

export default User;