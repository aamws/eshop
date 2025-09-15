import { Link } from 'react-router'
import logo from '../assets/logo.png'

export default function Footer(){
  return (
  <div className="text-center p-4 border-top">

   <Link className="navbar-brand" to='/'>
            
           <img src={logo} alt="..."width="40" className="me-2" />eShop
          </Link>

  </div>
      
  
  )
}


