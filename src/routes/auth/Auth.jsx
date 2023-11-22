import React from 'react'
import "./Auth.scss"
import { NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Create from './create/Create'
import Login from './login/Login'

function Auth() {
  const email = "dilshodj544@gmail.com"
  return (
    <section className='auth'>

      <div className='animation-circle'>

      </div>
      <div className='auth-popup'>
        <ul className='auth-popup__nav'>
          <li>
              <NavLink activeClassName="auth__link--active" className="auth__link" to="/auth/login">Kirish</NavLink>
          </li>
          <li>
            <NavLink activeClassName="auth__link--active" className="auth__link" to="/auth/create">Ro'yxatdan o'tish</NavLink>
          </li>
        </ul>
        <Switch>
        <Route path="/auth/create">
          <Create/>
        </Route>
        <Route path="/auth/login">
            <Login/>
          </Route>
        </Switch>
      </div>
      
    </section>
  )
}

export default Auth
