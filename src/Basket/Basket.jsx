import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Basket.css';
import './Basket.scss';


function Basket() {





    return (
        <div className='BasketMain'>

            <div className='BuyAddress'>
                <div className='buy'>
                    <li className='tovars'>Товаров 8</li>
                    <li className='amount'>Итого 43124321₽ </li>




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

            </div>

        </div>
    )
}

export default Basket;