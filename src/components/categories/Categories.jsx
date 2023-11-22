import React, { useEffect, useState } from 'react' 
import Container from '../../utils/Container'
import "./Categories.scss"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import useFetchData from '../../hooks/useFetchData'
import { useTranslation } from 'react-i18next'

function Categories() {
  const { t } = useTranslation();
  const [data , isLoading] =  useFetchData("/categories")

  return (
    <section className='categories'>
      <h2 className='category-title'>{t("main_catigories_title")}</h2>
      <Container>
        <div className='categories-wrapper'>
            {
                data.map(category => 
                    <Link to="/category" className='category-item' key={category.id}>
                        <div className='category__image-wrapper'>
                            <img className='category-image' src={category.image} alt="" /> 
                        </div>
                        <h3>{category.name}</h3>
                    </Link>    
                )
            }
        </div>
      </Container>
    </section>
  )
}

export default Categories
