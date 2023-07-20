import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer bg-dark text-light p-3'>
        <h6 className='text-center mt-3'>All rights reserved © Rohan</h6>
        <p className='text-center'>
            <Link to='/about'>About</Link>|
            <Link to='/contact'>Contacts</Link>
        </p>
    </div>
  )
}

export default Footer