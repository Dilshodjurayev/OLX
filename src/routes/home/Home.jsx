import React from 'react'
import Categories from '../../components/categories/Categories'
import MainProducts from '../../components/main-products/MainProducts'
import Search from '../../components/search/Search'

function Home() {
  return (
    <>
      <main>
        <Search/>
        <Categories/>
        <MainProducts/>
      </main>
    </>
  )
}

export default Home
