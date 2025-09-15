import React from 'react'
import { Link,  Navigate } from 'react-router'

export default function Contact(){
return (
    <div className="container my-4">
      <h2>Contact Page</h2>
          <Link to='/'>Home</Link>
        <button onClick={()=>Navigate('/') }> Home Page</button>
    
    </div>
  )
}


