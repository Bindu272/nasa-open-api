import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
    <img src='https://api.nasa.gov/assets/footer/img/favicon-192.png' alt='logo' style={{height:'60px', position:'relative', bottom:'10px', }}/>
   <Link to='/'>All images</Link>
   <Link to='/apod'>apod</Link>
   <Link to='/neows'>neows</Link>
   {/* <Link to='/cmedata'>cmedata</Link>  */}
    </div>
  )
}

export default Header
