import React from 'react'
import { Link } from 'react-router-dom'
import HouseIcon from '@mui/icons-material/House';

const Main = () => {
  return (
  
       <Link to="/">       
                <a className="nav-link text-white fst-italic mt-5" style={{textAlign:"center"}} href="#" ><HouseIcon className='mx-2'/>Go to main page</a>
       </Link>
  )
}

export default Main