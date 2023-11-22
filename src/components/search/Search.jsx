import React, { useState } from 'react';
import Container from '../../utils/Container';
import { BiSearch } from 'react-icons/bi'
import "./Search.scss"
import instance from '../../api/instance'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useTranslation } from 'react-i18next'; // useTranslation ni import qo'shing

function Search() {
  const { t } = useTranslation(); // useTranslation hook'ini ishlatish

  const [searchResult, setSearchResult] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const giveSearchSuggestions = (e) => {
    setSearchValue(e.target.value);
    instance.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
      .then(response => setSearchResult(response.data))
      .catch(err => console.log(err))
  }

  const giveMoreResults = (e) => {
    e.preventDefault()
    window.location.pathname = `/search/${searchValue}`
  }

  return (
    <section className='search'>
      <Container>
        <form onSubmit={giveMoreResults}>
          <div className="search__wrapper">
            <div className='search-elements'>
              <BiSearch />
              <input onChange={giveSearchSuggestions} className='search__input' type="text" placeholder={t("main_search_input")} /> {/* t("main_search_input") orqali tilni o'qish va tarjima qilish */}
              {searchResult?.length > 0 && searchValue ? <div className='search-suggestions'>
                {
                  searchResult.map(searchItem =>
                    <Link className="search-item__link" to="/" key={searchItem.id}>
                      <span>{searchItem.title}</span>
                    </Link>
                  )
                }
              </div> : <></>}
            </div>
            <button className='search__btn'><BiSearch />{t("main_search_btn")}</button>
          </div>
        </form>
      </Container>
    </section>
  )
}

export default Search
