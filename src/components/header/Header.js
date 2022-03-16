import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='header__title'>
            <h2>Our Pricing</h2>
        </div>
        <div className='header__button'>
            <h3>Annually</h3>
            <input type="checkbox" name='' />
            <h3>Monthly</h3>
        </div>

    </div>
  )
}

export default Header