import React from 'react';
import { useState } from 'react';
import urlPhp from '../urlPhp.jsx';
import url from '../url.jsx';

// import { Link } from 'react-router-dom';
import './Reg.css';


function Reg() {
  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('user_id', localStorage.getItem('user_id'));
    await fetch(urlPhp + 'userAddAvatar.php', {
      method: 'POST',
      body: (formData)
    });
  };




  const [card, setCard] = useState();
  let login = '';
  let email = '';
  let password = '';
  let confirm = '';
  let address = '';
  function register() {
    login = document.querySelector("#login").value;
    email = document.querySelector("#email").value;
    password = document.querySelector("#password").value;
    confirm = document.querySelector("#confirm").value;
    address = document.querySelector("#address").value;

    fetch(urlPhp + 'register.php?login=' + login + '&email=' + email + '&password=' + password + '&confirm=' + confirm + '&address=' + address, {
      method: 'POST',
      header: {
        "Content-Type": "applicationn/x-www-form-urlencoded"
      },
      body: JSON.stringify({ action: 1 })
    }).then(response => response.json()).then(response => { setCard(response); })

  }
  if (card === 'logged') {
    localStorage.setItem('email', document.querySelector("#email").value);
    localStorage.setItem('login', document.querySelector("#login").value);
    localStorage.setItem('address', document.querySelector("#address").value);

    fetch(urlPhp + "fetchUserID.php?email=" + document.querySelector("#email").value, {
      method: 'POST',
      header: {
        "Content-Type": "applicationn/x-www-form-urlencoded"
      },
      body: JSON.stringify({ action: 1 })
    }).then(response => response.json()).then(response => {
      localStorage.setItem('user_id', response)
      handleSubmit()
      window.location.replace(url)
    })
  };
  return (
    <>
      <div className="form">
        <div className="form__content">

          <h1>Регистрация</h1>

          <div className="form__box">
            <input type="text" id='login' className="form__input" placeholder="Введите имя" />
            <label for="" className="form__label">Введите имя</label>
            <div className="form__shadow"></div>
          </div>

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

          <div className="form__box">
            <input type="password" id='confirm' className="form__input" placeholder="Повторите пароль" />
            <label for="" className="form__label">Повторите пароль</label>
            <div className="form__shadow"></div>
          </div>
          <div className="form__box">
            <input type="address" id='address' className="form__input" placeholder="Введите адрес доставки" />
            <label for="" className="form__label">Введите адрес</label>
            <div className="form__shadow"></div>
          </div>
          <input type="file" className='changeimg' onChange={handleImageChange} />
          {card}

          <div className="form__button">
            {/* <span onClick={register}>penis</span> */}
            <input onClick={register} type="Submit" className="form__submit" value="Зарегистрироваться" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reg;
