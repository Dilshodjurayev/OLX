import React, { useEffect, useState } from 'react'
import './MainProducts.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Container from '../../utils/Container';
import { BiHeart, BiLoader } from "react-icons/bi"
import useFetchData from '../../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

function MainProducts() {
  const { t } = useTranslation();
  const [data , isLoading] = useFetchData("/products?offset=0&limit=20")
  
  function trimDescription(str){
    return str.split("").slice(0 , 60).join("") + '...'
  }

  return (
    <section className='main-products'>
      <h2 className='main-products__title'>{t("main_products_title")}</h2>
      <Container>
        <div className="main-product-wrapper">
            {!isLoading?
                data.map(product => 
                    <div className='product-item' key={product.id}>
                        <Link to={`/product/${product.id}`}>
                        {
                            product.images?.at(0) && product.images?.at(0).startsWith("https://") ?
                            <img className='product-item__image' src={product.images?.at(0)} alt="" />
                            :
                            <img className='product-item__image' src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" alt="" />

                        } 
                            <h3>{product.title}</h3>
                        </Link>
                        <div className='product-info'>
                            <div>
                                <p>{trimDescription(product.description)}</p>
                                <strong>${product.price}</strong>
                            </div>
                            <BiHeart />
                        </div>
                    </div>    
                )
              :
              <span className="loading"></span>
            }
        </div>
      </Container>
    </section>
  )
}

export default MainProducts
