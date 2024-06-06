import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className="container">
      <div className="card-list">
        <a href="#" className="card-item">
         
          <div className="card-content">
            <span className="card-title">Buy</span>
            <h3>Buy your dream house.</h3>
          </div>
        </a>
        <a href="#" className="card-item">
          <div className="card-content">
            <span className="card-title">Rent</span>
            <h3>Rent a perfect room.</h3>
          </div>
        </a>
        <a href="#" className="card-item">
          <div className="card-content">
            <span className="card-title">Sale</span>
            <h3>Put your property on sale.</h3>
          </div>
        </a>
      </div>
    </div>
  )
}
