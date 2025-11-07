import React from 'react';
import { useState } from 'react';
import urlPhp from '../urlPhp.jsx';
import url from '../url.jsx';

// import { Link } from 'react-router-dom';
import '../Reg/Reg.css';
import './Login.css';

function Login() {
  const [card, setCard] = useState();
  let email = '';
  let password = '';
  function loginReg() {
    email = document.querySelector("#email").value;
    password = document.querySelector("#password").value;

    fetch(urlPhp + 'login.php?email=' + email + '&password=' + password, {
      method: 'POST',
      header: {
        "Content-Type": "applicationn/x-www-form-urlencoded"
      },
      body: JSON.stringify({ action: 1 })
    }).then(response => response.json()).then(response => { setCard(response) })
  }


  if (card === 'logged') {
    localStorage.setItem('email', document.querySelector("#email").value);

    fetch(urlPhp + "fetchLogin.php?email=" + document.querySelector("#email").value, {
      method: 'POST',
      header: {
        "Content-Type": "applicationn/x-www-form-urlencoded"
      },
      body: JSON.stringify({ action: 1 })
    }).then(response => response.json()).then(response => { localStorage.setItem('login', response) })

    fetch(urlPhp + "fetchAddress.php?email=" + document.querySelector("#email").value, {
      method: 'POST',
      header: {
        "Content-Type": "applicationn/x-www-form-urlencoded"
      },
      body: JSON.stringify({ action: 1 })
    }).then(response => response.json()).then(response => { localStorage.setItem('address', response) })

    fetch(urlPhp + "fetchUserID.php?email=" + document.querySelector("#email").value, {
      method: 'POST',
      header: {
        "Content-Type": "applicationn/x-www-form-urlencoded"
      },
      body: JSON.stringify({ action: 1 })
    }).then(response => response.json()).then(response => {
      localStorage.setItem('user_id', response)
      window.location.replace(url)
    })
  };


  return (
    <>
      <div className="form">
        <div className="form__content">

          <h1>Вход</h1>



          {/* <div className="form__box">
        <input type="text" className="form__input" placeholder="Введите адрес пункта выдачи" />
        <label for="" className="form__label">Введите адрес пункта выдачи</label>
        <div className="form__shadow"></div>
      </div> */}

          <div className="form__box">
            <input type="email" id='email' className="form__input" placeholder="Введите Email" />
            <label for="" className="form__label">Введите Email</label>
            <div className="form__shadow"></div>
          </div>

          <div className="form__box">
            <input type="password" id='password' className="form__input" placeholder="Введите пароль" />
            <label for="" className="form__label">Введите пароль</label>
            <div className="form__shadow"></div>
          </div>



          {card}
          <div className="form__button">

            <input onClick={loginReg} type="Submit" className="form__submit" value="Войти в аккаунт" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
