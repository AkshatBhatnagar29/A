import React from 'react'
import './Sale.css'

export default function Sale() {
  return (
    <div>
       <form action="/search" method="get" class="search-form">
            <input type="text" name="query" placeholder="Search..."/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}
