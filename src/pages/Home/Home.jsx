import React, { useEffect, useState } from 'react'
import "../../index.css"
import { NavLink } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'
import DealsContainer from '../../components/Deals/DealsContainer'

function Home() {

  const [categories, setCategories] = useState([])

  const fetchCategories = async() => {
    try {
      const response = await fetch("/api/categories")
      const normalRes = await response.json()
      setCategories(normalRes.categories);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className='homePageContainer'>
        <div className='sliderParent'>
          <Slider />
        </div>
        <DealsContainer />
        <div className='bookCategoriesContainer'>
            <h2>Featured Book Categories</h2>
            <p>There are many categories of book available at book bazaar. Choose your favorite one now</p>
            <div className='bookCategories'>
              {categories.map(category => {
                return(
                  <p>{category.categoryName}</p>
                )
              })}
            </div>
            <p><NavLink to="/products">Go to products</NavLink></p>
        </div>
    </div>
  )
}

export default Home