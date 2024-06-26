import React from 'react'
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";


function Header() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
        <div className='flex-row'>
            <img className='logo' src="./src/images/logo.png"/>
            <p className='logo-text'>E-Depom</p>
        </div>
        <div className='flex-row'>
          <input className='.search-input' type='text' placeholder='Bir şeyler ara...'/>
          
          <div>
          <CiShoppingBasket className='icon' />
          </div>
        </div>
    </div>
  )
}

export default Header