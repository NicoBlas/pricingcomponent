import React, {useState, useEffect, useContext} from 'react'
import { PriceContext } from '../PriceContext'
import PricingList from '../pricingList/PricingList'
import "./header.css"


const Header = () => {
  // Update del estado del componente para pasarle precios mensuales o anuales.
  const {value, setValue} = useContext(PriceContext)

  const updatePrice = () =>{
    return setValue(value => !value)
  }

  return (
    <div className='header'>
        <div className='header__title'>
            <h2>Our Pricing</h2>
        </div>
        <div className='header__button'>
            <h3>Annually</h3>
            <input type="checkbox" onClick={updatePrice} name='' />
            <h3>Monthly</h3>
        </div>

    </div>
  )
}

export default Header 