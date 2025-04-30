import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spincomp from '../../day8/spin'
import './Productdetails.css'

function Productdetails() {
  const [data, setData] = useState({})
  const info = useParams()

  useEffect(() => {
    fetchProducts()
  }, [info.id])

  async function fetchProducts() {
    const result = await axios.get(`https://fakestoreapi.com/products/${info.id}`)
    setData(result.data)
  }

  return (
    <div className="detail-container">
      {Object.keys(data).length > 0 ? (
        <div className="detail-card">
          <div className="detail-left">
            <img src={data.image} alt={data.title} className="detail-image" />
          </div>
          <div className="detail-right">
            <h1 className="detail-title">{data.title}</h1>
            <p className="detail-description">{data.description}</p>
            <p className="detail-price">$ {data.price}</p>
            <p className="detail-rating">⭐ {data.rating?.rate} ({data.rating?.count} reviews)</p>
          </div>
        </div>
      ) : (
        <Spincomp />
      )}
    </div>
  )
}

export default Productdetails
