import React from 'react'
import './Product.scss'
import { useParams ,Link } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'
import Container from '../../utils/Container'

function Product() {
  const productIdData = useParams()
  const [data , isLoading] = useFetchData(`/products/${productIdData.id}`)
  console.log(data)
  return (
    <section className='single-product'>
        <Container>
            <br />
            <Link to="/" className="btn-back">
                🔙 Orqaga
            </Link>
            <div className='single-product__wrapper'>
                <div className='single-product__image-wrapper'>
                    {
                        data.images?.at(0) && data.images?.at(0).startsWith("https://") ?
                        <img src={data.images?.at(0)} alt="" />
                        :
                        <img src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" alt="" />

                    }
                </div>
                <div className='single-product__info'>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <strong>${data.price}</strong>
                    <button className='link link--dark'>Add to card</button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Product
