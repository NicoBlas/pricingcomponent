import React, { useEffect, useState } from 'react'
import "./pricingList.css"
import Pricing from '../pricing/Pricing'
import Header from '../header/Header'
import { useContext } from 'react'
import { PriceContext } from '../PriceContext'

const data = [{
  pack: "Basic",
  price: "19.99",
  priceA: "199.99",
  storage: "500 GB Storage",
  users: "2 Users Allowed",
  gb: "Send up to 3 GB",
  mid: false

},
{
  pack: "Professional",
  price: "24.99",
  priceA: "249.99",
  storage: "1 TB Storage",
  users: "5 Users Allowed",
  gb: "Send up to 10 GB",
  mid: true
},
{
  pack: "Master",
  price: "39.99",
  priceA: "399.99",
  storage: "2 TB Storage",
  users: "10 Users Allowed",
  gb: "Send up to 20 GB",
  mid:false
}
]

const PricingList = () => {

  const {value} = useContext(PriceContext)


  return (
    <div className='pricingList'>
      <Pricing mid={data[0].mid} pack = {data[0].pack} price = {value?data[0].price:data[0].priceA} storage= {data[0].storage} users = {data[0].users} gb = {data[0].gb}/>
      <Pricing mid={data[1].mid} pack = {data[1].pack} price = {value?data[1].price:data[1].priceA}storage= {data[1].storage} users = {data[1].users} gb = {data[1].gb}/>
      <Pricing mid={data[2].mid} pack = {data[2].pack} price = {value?data[2].price:data[2].priceA} storage= {data[2].storage} users = {data[2].users} gb = {data[2].gb}/>

    </div>
  )
}

export default PricingList