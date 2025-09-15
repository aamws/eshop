import { Link } from "react-router"
import logo from "../assets/logo.png"

export default function Navbar(){

return(

<nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
  <div className="container">
    <Link className="navbar-brand" to="/">
        <img src={logo} alt="..."width="40" className="me-2" />eShop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/about">About</Link>
        </li>
     
      </ul>


      
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/admin/products">Products</Link></li>

            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/logout">Logout</Link></li>
          </ul>
        </li>
      
    </div>
  </div>
</nav>
)
}