
import React from 'react';
import { useState } from 'react';
import urlPhp from '../urlPhp.jsx';
import url from '../url.jsx';

// import { Link } from 'react-router-dom';
import '../Reg/Reg.css';
import './AddCard.css';


function AddCard() {






  const [card, setCard] = useState();
  let name = '';
  let company = '';
  let price = '';
  let description = '';
  
  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  let slug = '';
  const slugify = require('slugify');
  function generateSlug(title) {
    return slugify(title.toLowerCase(), '-');
  }

  function createProduct() {
    name = document.querySelector("#name").value;
    company = document.querySelector("#company").value;
    price = document.querySelector("#price").value;
    description = document.querySelector("#description").value;
    slug = generateSlug(name);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('user_id', localStorage.getItem('user_id'));
    fetch(urlPhp + 'addProduct.php?name=' + name + '&company=' + company + '&price=' + price + '&description=' + description + '&slug=' + slug + '&user_id=' + localStorage.getItem('user_id'), {
      method: 'POST',
      body: (formData)
    }).then(response => response.json()).then(response => { setCard(response); })


  }


  return (
    <>
      <div className="form">
        <div className="form__content">

          <h1>Создайте товар</h1>

          <div className="form__box">
            <input id='name' className="form__input" placeholder="Название товара" />
            <label for="" className="form__label">Название товара</label>
            <div className="form__shadow"></div>
          </div>

          <div className="form__box">
            <input id='company' className="form__input" placeholder="Название магазина" />
            <label for="" className="form__label">Название магазина</label>
            <div className="form__shadow"></div>
          </div>

          <div className="form__box">
            <input id='price' className="form__input" placeholder="Цена в рублях" />
            <label for="" className="form__label">Цена в рублях</label>
            <div className="form__shadow"></div>
          </div>

          <div className="form__box">
            <input id='description' className="form__input" placeholder="Описание" />
            <label for="" className="form__label">Описание</label>
            <div className="form__shadow"></div>
          </div>
          {/* <form action="insert_product.php" method="POST" enctype="multipart/form-data"> */}
          {/* <label>File: </label><input type="file" name="image" id="image" /> */}
          <input type="file" onChange={handleImageChange} />
          {/* </form> */}


          {card}
          <div className="form__button">
            {/* <span onClick={register}>penis</span> */}
            <input onClick={createProduct} type="Submit" className="form__submit" value="Зарегистрировать товар" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCard;
