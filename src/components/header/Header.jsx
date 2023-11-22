import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import {BiHeart, BiMessageRounded, BiUser } from 'react-icons/bi';
import Container from '../../utils/Container';
import { RedirectButton } from '../../utils/Components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import i18n from '../../language/i18next';

function Header() {
  const { t } = useTranslation()
  const location = useLocation();
  const createUserData = useSelector(state => state.email)
  return location.pathname.includes('/auth') ? <></> :  (
    <header>
      <Container>
        <div className='header-wrapper'>
            <img className='header__logo' src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="" />
            <nav>
                <ul className='language-select'>
                    <li className={localStorage.getItem("lang") == "uz" ? "active-lang" : ""} onClick={() => i18n.changeLanguage("uz")}>O'Z</li>
                    <span>|</span>
                    <li className={localStorage.getItem("lang") == "ru" ? "active-lang" : ""} onClick={() => i18n.changeLanguage("ru")}>RU</li>
                </ul>
                <Link to="/message" className='header__nav-link'>
                    <BiMessageRounded/>
                    {t("header_message")}
                </Link>
                <Link to="/wishlist" className='header__nav-link'>
                    <BiHeart/>
                </Link>
                <Link to="/auth" className='header__nav-link'>
                    <BiUser/>
                    
                      {
                      createUserData ? createUserData : t("header_account") 
                      }
                </Link>
                <RedirectButton title={t("header_node")} redirect='/create-new'  type="light"  />
            </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
