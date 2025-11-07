import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import ToastFunction from '../ToastFunction.jsx';
import ToastReturn from '../ToastReturn.jsx';




function Header() {

  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('email')) {
      setIsLogged(true);
    }
  }, []);

  function search() {
    window.location.href = '/Search' + '?search=' + document.querySelector('#search').value;
  }

  return (
    <div className='mainHeader' id='1'>
      <div className='header'>
        {isLogged ? <div className='address'>
          <img src="../img/location-pin.png" alt="" width={'18px'} height={'18px'} />
          <li>{localStorage.getItem('address')}</li>
        </div> : <div className='address'>
          <img src="../img/location-pin.png" alt="" width={'18px'} height={'18px'} />
          <li>Адрес</li>
        </div>}


        {isLogged ?
          <div className='seller'>

            <img src="../img/exchange.png" alt="" width={'22px'} height={'22px'} />
            <Link to='/AddCard'>
              <li className='logo_li'>Стать продавцом</li>
            </Link>

          </div>
          :
          <div className='seller'>

            <img src="../img/exchange.png" alt="" width={'22px'} height={'22px'} />

            <li className='logo_li' style={{ cursor: 'pointer' }} onClick={ToastFunction}>Стать продавцом</li>


          </div>

        }

        <ToastReturn />


        <div className='logo'>
          <Link to='/'><li className='logo_li'>PPH</li></Link>
        </div>

        <div className='search_main'>
          <input type="search" id="search" className='search' placeholder="Найти..." />
          <div className='search_icon_main' onClick={search}>
            <img src="../img/zoom-or-search-interface-symbol.png" alt="" width={'.875rem'} height={'.875rem'} className='search_icon' />
          </div>
        </div>

        <div className='DLPC'>


          <div className='favourites' >
            <Link to='/Favourite'>
              <img src="../img/heart-shape-outline.png" alt="" width={'30px'} height={'30px'} style={{ margin: '0' }} />
              <li className='katalog_li'>Избранное</li>
            </Link>
          </div>


          <div className='profile' >
            <Link to='/Profile'>
              <img src="../img/user.png" alt="" width={'30px'} height={'30px'} style={{ margin: '0' }} />
              <li className='katalog_li' style={{ color: 'white' }}>Профиль</li>
            </Link>
          </div>


          <div className='cart' >
            <Link to='/Cart'><img src="../img/add-cart.png" alt="" width={'30px'} height={'30px'} style={{ margin: '0' }} />
              <li className='katalog_li'>Корзина</li></Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Header;






