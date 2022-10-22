import React from 'react'
import Header from './Header'
import Table from './Table'
import Filter from './Filter'
import Card from './Card'
import Color from './Color'
import Order from './Order'
const Home = () => {
  return (
    <div> 
      <Header /> 
      <Table />
      <Filter />
      <Card/>
      <Color />
    </div>
  )
}

export default Home