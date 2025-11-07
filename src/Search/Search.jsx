import React, { useEffect } from 'react';
import { useState } from 'react';
import '../Main/Main.css';
import Card from '../Main/Card';
import urlPhp from '../urlPhp.jsx';
import url from '../url.jsx';
import { useSearchParams } from 'react-router-dom';

function Search() {
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('search');
    console.log(searchValue);
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
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
            await fetch(urlPhp + "search.php?search=" + searchValue)
                .then(response => response.json())
                .then(products => {
                    products.forEach(product => {
                        // Декодирование изображения из base64
                        product.image = decodeBase64ToBlob(product.image, 'image/');
                    });
                    setData(products);
                    setLoading(true);
                })
        }
        dataFetch();
    }, []);
    // console.log(data);

    // const card = [
    //     { id: 0, name: 'каверчики проста пушка брат', namestore: 'каверчики', image: './img/image 2.png', price: '5167 ', amount: '1', user: 'user', reviews: '322', rating: '5.1' },
    //     { id: 1, name: 'каверчики проста пушка брат', namestore: 'каверчики', image: './img/image 2.png', price: '5167 ', amount: '1', user: 'user', reviews: '322', rating: '5.1' },
    //     { id: 2, name: 'каверчики проста пушка брат', namestore: 'каверчики', image: './img/image 2.png', price: '5167 ', amount: '1', user: 'user', reviews: '322', rating: '5.1' },
    //     { id: 3, name: 'каверчики проста пушка брат', namestore: 'каверчики', image: './img/image 2.png', price: '5167 ', amount: '1', user: 'user', reviews: '322', rating: '5.1' },

    // ]
    return (
        <>
            <div className='carti'>
                <section id="section-1">
                    {loading ? data.map((singleCard) => (
                        <Card id={singleCard.id} name={singleCard.name} company={singleCard.company} image={singleCard.image} price={singleCard.price} reviewsNum={singleCard.reviewsNum} rating={singleCard.rating} />
                        // amount={dishOrder.find(a => a.dish === singleCard.id).amount} 
                    )





                        // LOADER //


                    ) : <svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
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

                </section>
            </div>
        </>

    )
}

export default Search;