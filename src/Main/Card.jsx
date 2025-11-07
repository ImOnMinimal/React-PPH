import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import urlPhp from '../urlPhp.jsx';
import ToastFunction from '../ToastFunction.jsx';
// import slugify from 'slugify';
import { useState, useEffect } from 'react';

function Card({ id, name, company, image, price, amount, reviewsNum, rating, user }) {
    price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');


    const slugify = require('slugify');
    function generateSlug(title) {
        return slugify(title.toLowerCase(), '-');
    }
    const slug = generateSlug(name);
    // useEffect(() => {
    //   const fetchProduct = async () => {
    //     const response = await fetch(`/api/products?slug=${slug}`);
    //     const data = await response.json();
    //     setProduct(data);
    //   };
    //   fetchProduct();
    // }, [slug]);
    function addToCart() {
        fetch(urlPhp + "addToCart.php?product_id=" + id + "&user_id=" + localStorage.getItem('user_id'))
    }
    function addToFavourite() {
        fetch(urlPhp + "addToFavourite.php?product_id=" + id + "&user_id=" + localStorage.getItem('user_id'))
    }
    function removeFromFavourite() {
        fetch(urlPhp + "removeFromFavourite.php?product_id=" + id + "&user_id=" + localStorage.getItem('user_id'))
        const element = document.getElementById(id);
        element.style.display = 'none';
    }


    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('email')) {
            setIsLogged(true);
        }
    }, []);


    return (

        <>
            {/* <div className='cartochkaMain'> */}

            <div className='cartochka' id={id}>

                <Link to={'/Full/' + slug + '-' + id}>{image && <img src={URL.createObjectURL(image)} alt="" className='imgcartochka' />}</Link>


                <div className='cartochka1'>
                    <li className='costcart'>{price}₽</li>
                    <img src=".//img/free-icon-add-cart-4175027.png" alt="" className='imgcart' />
                    {isLogged ? <li className='textcart' style={{ cursor: 'pointer' }} onClick={addToCart}>В корзину</li> : <li className='textcart' style={{ cursor: 'pointer' }} onClick={ToastFunction}>В корзину</li>}
                </div>


                <div className='cartochka2'>
                    <li className='storename'>{company}</li>
                    <li className='palka'>/</li>
                    <li className='itemname'>{name}</li>
                </div>

                <div className='cartochka1'>
                    <img src=".//img/star.png" alt="" className='starimgCard' />
                    <li className='ratingCard'>{rating}</li>
                    <li className='reviewsCard'> {reviewsNum} отзывов</li>
                </div>

                {isLogged ?
                    // check if url is /Favourite
                    <>{window.location.pathname === '/Favourite' ?
                        <div style={{ width: '5px', height: '5px' }}>
                            <img src=".//img/heart-shape.png" alt="" className='favimg' style={{ cursor: 'pointer' }} onClick={removeFromFavourite} />
                            <img src=".//img/heart-shape2.png" alt="" className='favimg2' style={{ cursor: 'pointer' }} onClick={removeFromFavourite} />
                        </div> :
                        <div style={{ width: '5px', height: '5px' }}>
                            <img src=".//img/heart-shape.png" alt="" className='favimg' style={{ cursor: 'pointer' }} onClick={addToFavourite} />
                            <img src=".//img/heart-shape2.png" alt="" className='favimg2' style={{ cursor: 'pointer' }} onClick={addToFavourite} />
                        </div>
                    }</> :
                    <div>
                        <img src=".//img/heart-shape.png" alt="" className='favimg' style={{ cursor: 'pointer' }} onClick={ToastFunction} />
                        <img src=".//img/heart-shape2.png" alt="" className='favimg2' style={{ cursor: 'pointer' }} onClick={ToastFunction} />
                    </div>
                }
            </div>
            {/* </div> */}
        </>

    )
}

export default Card;





