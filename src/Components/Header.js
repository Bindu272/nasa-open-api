import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
   <Link to='/'>All images</Link>
   <Link to='/apod'>apod</Link>
   <Link to='/neows'>neows</Link>
   <Link to='/cmedata'>cmedata</Link> 
    </div>
  )
}

export default Header
