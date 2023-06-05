import React from 'react'
import  { Link } from 'react-router-dom'

import AF from './images/AF.png'

function Header() {
    return (
      <nav className='navbar-row'>
        <div className='container' style={{display:'flex', justifyContent:'space-around', flexDirection:'row'}}>
            <div className='col-12 col-md-3'>
              <div className='navbar-brand'>
                <img src={AF} alt='Logo' style={{width:'30%', justifyContent:'center'}}/>
              </div>
            </div>
            <div className='col-12 col-md-9'>
              <ul className='d-flex justify-content-end'>
                <li>
                  <Link to='/'>Inicio</Link>
                </li>
                <li>
                  <Link to='/form'>Formulario</Link>
                </li>
                <li>
                  <Link to='/categories'>Categorías</Link>
                </li>
              </ul>
              <div className='text-center mt-4 mt-md-0'>
                <button className='btn' id='login_btn'>
                  Inicie Sesión
                </button>
              </div>
            </div>
          </div>
        
      </nav>
    );
  }

export default Header