import React from 'react'
import Link from 'gatsby-link'
import './Header.css'


const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      {/* <Link to='/aa'>Tangyuan Design </Link> */}
      {/* <Link to='/aa'> aa </Link> */}
      {/* <Link to='/aa'> aa </Link> */}
      {/* <Link to='/'> <img src={logo}  width='38px' /> </Link> */}
      
      <Link to='/'> <h1 className='title11'>NUM Design</h1> </Link>
      {/* <Link to='/buy'> <button>Log in</button> </Link> */}
      <div className="HeaderBackgroundcolor"> </div>
    </div>
    
    
  </div>
)

export default Header
