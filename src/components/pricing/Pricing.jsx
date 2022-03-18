import React ,{useState} from 'react'
import "./pricing.css"
import { PriceContext } from '../PriceContext'
import { useContext } from 'react'


const Pricing = (props) => {

    const {value} = useContext(PriceContext)
    
    return (
        
        <div className={props.mid?"pricing-mid":"pricing"}>
            <div className={props.mid?"pricing__pack-mid":'pricing__pack'}>
                <h3>{props.pack}</h3>
                <h4 className={!value?"discount":"discountBlock"}>15% OFF!</h4>
            </div>

            <div className='pricing__price' >
                <div className={props.mid?"pricing__price-f-mid":"pricing__price-f"}>
                    <h2>$</h2>
                </div>
                <div className={props.mid?'pricing__price-price-mid':'pricing__price-price'}>
                    <h1>{props.price}</h1>
                </div>
                
            </div>

            <div className={props.mid?'pricing__features-mid':'pricing__features'}>
                <div className={props.mid?'pricing__features__box-mid':'pricing__features__box'}>
                    <h3>{props.storage}</h3>
                </div>
                <div className={props.mid?'pricing__features__box-mid':'pricing__features__box'}>
                    <h3>{props.users}</h3>
                </div>
                <div className={props.mid?'pricing__features__box-mid':'pricing__features__box'}>
                    <h3>{props.gb}</h3>
                </div>
                <div className={props.mid?'pricing__features__box-mid':'pricing__features__box'} />

            </div>

            <div className={props.mid?'pricing__button-mid':'pricing__button'}>
                <button type='button'>LEARN MORE</button>

            </div>

        </div>
    )
}

export default Pricing