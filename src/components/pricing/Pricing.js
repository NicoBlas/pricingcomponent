import React from 'react'
import "./pricing.css"

const Pricing = (props) => {
  return (
    <div className='pricing'>
        <div className='pricing__pack'>
            <h3>{props.pack}</h3>
        </div>

        <div className='pricing__price'>
            <div className='pricing__price-f'>
                <h2>$</h2>
            </div>
            <div className='pricing__price-price'>
                <h1>{props.price}</h1>
            </div>
            
        </div>

        <div className='pricing__features'>
            <div className='pricing__features__box'>
                <h3>{props.storage}</h3>
            </div>
            <div className='pricing__features__box'>
                <h3>{props.users}</h3>
            </div>
            <div className='pricing__features__box'>
                <h3>{props.gb}</h3>
            </div>
            <div className='pricing__features__box' />

        </div>

        <div className='pricing__button'>
            <button type='button'>LEARN MORE</button>

        </div>

    </div>
  )
}

export default Pricing