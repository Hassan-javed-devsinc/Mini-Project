import React from 'react'
import './Nav.css'
import { useState } from 'react'
import logo from '../Bun-Images/logo.png'
import './Nav.js'
import {NavLink} from "react-router-dom";

export default function Nav() {
    
    const [login, setLogin] = useState("login-link")
    const [burger, setBurger] = useState("burger-link")
    const burgerHandler = () => {
        setLogin("login-link")
        setBurger("burger-link")
    }

    const loginHandler = () => {
        setLogin("burger-link")
        setBurger("login-link")
    }
  
  
    return (
      <React.Fragment>
          <header className='header'>
            <img className='logo' src={logo} />
            <div className='link-container'>
                <NavLink className={burger} to='/' onClick={burgerHandler} >Burger Builder</NavLink>
                <NavLink className={login} to='/login' onClick={loginHandler} >Login</NavLink>
            </div>
          </header>
    </React.Fragment>
  )
}
