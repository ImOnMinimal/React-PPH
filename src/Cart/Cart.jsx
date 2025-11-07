import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import './Cart.scss';
import urlPhp from '../urlPhp.jsx';
import CartCard from './CartCard.jsx';


function Cart() {

    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    function decodeBase64ToBlob(base64String, contentType) {
        const binaryString = atob(base64String);
        const arrayBuffer = new ArrayBuffer(binaryString.length);
        const uint8Array = new Uint8Array(arrayBuffer);

        for (let i = 0; i < binaryString.length; i++) {
            uint8Array[i] = binaryString.charCodeAt(i);
        }

        return new Blob([uint8Array], { type: contentType });
    }
    useEffect(() => {
        const dataFetch = async () => {
            await fetch(urlPhp + "fetchCart.php?user_id=" + localStorage.getItem('user_id'))
                .then(response => response.json())
                .then(products => {
                    products.forEach(product => {
                        // Декодирование изображения из base64
                        product.image = decodeBase64ToBlob(product.image, 'image/');
                    });
                    setData(products);
                    setLoading(true);

                    // // подсчёт цены всех товаров умноженного на количество их в корзине
                    // let totalPrice = 0;
                    // products.forEach(product => {
                    //     totalPrice += product.price * product.quantity;
                    // });
                    // setTotalPrice(totalPrice);
                })
        }
        dataFetch();
    }, []);

    const updateQuantity = (productId, newQuantity) => {
        setData((prevData) =>
            prevData.map((product) =>
                product.id === productId ? { ...product, quantity: newQuantity } : product
            )
        );
        fetch(urlPhp + "updateCart.php?product_id=" + productId + "&quantity=" + newQuantity + "&user_id=" + localStorage.getItem('user_id'))
    };

    const getTotalPrice = () => {
        return data.reduce((total, product) => total + product.price * product.quantity, 0);
    };


    return (
        <div className='CartMain'>

            <div className='BuyAddress'>
                <div className='buy'>
                    <li className='tovars'>Товаров 8</li>
                    <li className='amount'>Итого {getTotalPrice()}₽ </li>




                    {/* <button className='UserChange ' >Заказать</button> */}

                    <details>
                        <summary>
                            <div class="button UserChange">
                                Заказать
                            </div>
                            <div class="details-modal-overlay"></div>
                        </summary>
                        <div class="details-modal">
                            <div class="details-modal-close">

                            </div>
                            <div class="details-modal-title">
                                <h1>Подтверждение покупки</h1>
                            </div>
                            <div class="details-modal-content">
                                <p>
                                    Благодарим вас за покупку товара и продажу его на сайте PPH.
                                </p>
                            </div>
                        </div>
                    </details>



                </div>

                <div className='addressDelivery'>
                    <li className='tovars'>Адрес</li>
                    <li className='amount'>типа адрес бла бла бла </li>
                    <button className='UserChange'>Изменить адрес</button>
                </div>
            </div>

























            <div>
                {/* heck is data is empty */}
                {loading ?
                    (data.length !== 0 ? data.map((singleCard) => (
                        <CartCard id={singleCard.id} name={singleCard.name} company={singleCard.company} image={singleCard.image} price={singleCard.price} reviewsNum={singleCard.reviewsNum} rating={singleCard.rating} quantity={singleCard.quantity} onQuantityChange={updateQuantity} />))
                        :
                        <div>Корзина пуста!</div>)
                    :
                    <svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
                        <defs>
                            <clipPath id="smiley-eyes">
                                <circle class="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
                                <circle class="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
                            </clipPath>
                            <linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="#000" />
                                <stop offset="100%" stop-color="#fff" />
                            </linearGradient>
                            <mask id="smiley-mask">
                                <rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
                            </mask>
                        </defs>
                        <g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
                            <g>
                                <rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
                                <g fill="none" stroke="hsl(193,90%,50%)">
                                    <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
                                    <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
                                </g>
                            </g>
                            <g mask="url(#smiley-mask)">
                                <rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
                                <g fill="none" stroke="hsl(223,90%,50%)">
                                    <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
                                    <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
                                </g>
                            </g>
                        </g>
                    </svg>}
            </div>

        </div>
    )
}

export default Cart;