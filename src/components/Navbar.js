import React from 'react'
import { Link } from 'react-router-dom'
import HouseIcon from '@mui/icons-material/House';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupsIcon from '@mui/icons-material/Groups';
import "../style.css"

const Navbar = () => {
  return (
    <>
    <h1 className="navbar-brand fst-italic fs-1" style={{textAlign:"center" , margin:"15px"}}>Multi Language Application</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-info"   >
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
                <Link to="/home">       
                    <li className="nav-item  ">
                        <a className="nav-link text-white fst-italic" href="#" ><HouseIcon  className='mx-3 '/> Home</a>
                    </li>  
                </Link>
                <Link to="/contact">
                    <li className="nav-item">
                       <a className="nav-link text-white fst-italic" href="#"><PhoneIcon className='mx-3 ' />Contact Us</a>
                    </li>
                </Link>
                <Link to="/about">
                        <li className="nav-item">
                          <a className="nav-link text-white fst-italic" href="#"><GroupsIcon  className='mx-3 '/>About Us</a>
                        </li>
                </Link>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar