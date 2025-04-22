import './Nav.css';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    const [ NavContent , setNavContent ] = useState();
  
    useEffect(()=>{
      setInterval(()=>{
      var token=localStorage.getItem("token");
      var role=localStorage.getItem("role");
      if(token!=undefined && role=="admin")
      {
        setNavContent(<>
            <div class="navbar-nav ms-auto py-0 me-n3">
                    <a class="nav-item nav-link active"><Link to="/">Admin Home</Link></a>
                    <a class="nav-item nav-link"><Link to="/manageusers">Manageusers</Link></a>
                    <a class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                </div>
            </>);

      }   
      else if(token!=undefined && role=="user")
      {
        setNavContent(<>
            <div class="navbar-nav ms-auto py-0 me-n3">
                    <a class="nav-item nav-link active"><Link to="/">User Home</Link></a>
                    <a class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                </div>
            </>);
      }    
      else
      {
        setNavContent(<>
        <div class="navbar-nav ms-auto py-0 me-n3">
                <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                <a class="nav-item nav-link"><Link to="/about">About</Link></a>
                <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#f3525a"}} >Pages</a>
                    <div class="dropdown-menu m-0">
                        <a class="dropdown-item" style={{"color":"#f3525a"}} >Blog</a>
                        <a class="dropdown-item"><Link to="/service">Service</Link></a>
                    </div>
                </div>
                <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                <a class="nav-item nav-link"><Link to="/login">Login</Link></a>
            </div>
        </>);    
      }
       },1);
    },[]);    

  return (
    <>
    {/* Navbar Start */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>Tenders</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            
        { NavContent }

        </div>
    </nav>
    {/* Navbar End */}
    </>
  );
}

export default Nav;

