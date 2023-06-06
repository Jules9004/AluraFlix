import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AF from './images/AF.png';

function Header() {
  return (
    <Fragment className='container-nav'>
      <nav className='nav-fund' style={{ display: 'flex',  alignItems: 'center', justifyContent:'space-between' }}>
        <div className='navbar-brand d-flex justify-content-between'>
          <Link to='/' style={{fontSize:'30px', marginLeft:'15px', transition:'1s'}}>
            <img src={AF} alt='Logo' style={{ width: '30%', justifyContent: 'center' }} /></Link>
        </div>
          <ul className='navbar-menu'>
            <li>
              <Link to='/' style={{fontSize:'30px', marginLeft:'15px', transition:'1s'}}>Inicio</Link>
            </li>
            <li>
              <Link to='/form' style={{fontSize:'30px', marginLeft:'15px', transition:'1s'}}>Formulario</Link>
            </li>
            <li>
              <Link to='/categories' style={{fontSize:'30px', marginLeft:'15px', transition:'1s'}}>Categorías</Link>
            </li>
          </ul>
      </nav>
    </Fragment>
  );
}

export default Header;
