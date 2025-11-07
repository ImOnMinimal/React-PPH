import React from 'react';
import './Full.css';
import '../AddReview/AddReview.scss';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import urlPhp from '../urlPhp.jsx';
import AddReview from '../AddReview/AddReview.jsx';

import ToastFunction from '../ToastFunction.jsx';
import ToastReturn from '../ToastReturn.jsx';


function App() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const slugTitle = slug.replace(/^(.*?)-\d+$/, "$1")
  const id = slug.match(/(?:-(\d+)$)/)[1]


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
      await fetch(urlPhp + `fetchProduct.php?slug=${slugTitle}&id=${id}`)
        .then(response => response.json())
        .then(products => {
          // products.image = decodeBase64ToBlob(product.image, 'image/');
          products[0].image = decodeBase64ToBlob(products[0].image, 'image/');
          setData(products);
          setLoading(true);
        })
    }
    dataFetch();
  }, []);

  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('email')) {
      setIsLogged(true);
    }
  }, []);

  function addToCart() {
    fetch(urlPhp + "addToCart.php?product_id=" + id + "&user_id=" + localStorage.getItem('user_id'))
  }


  return (
    <>

      <div className='fullmain'>
        {loading ? <>
          <div className='cardmain'>
            <img src={URL.createObjectURL(data[0].image)} alt="картинка товара" className='fullcartochkaimg' />
            {/* <div className='namecart'>
              <li>{data[0].name}</li>
            </div> */}

            <div className='fullcartochka'>
              <li className='namecart'>{data[0].name}</li>


              {/* <li>{data[0].name}</li> */}

              <li className='fullrating'>
                <svg class="rating__star starimg" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                    </g>
                  </g>
                </svg>
                <li style={{ display: 'inline-block' }}>{data[0].rating}</li>
              </li>
              <li className='fullreviews'> {data[0].reviewsNum} отзывов</li>
              <li className='namestore'>{data[0].company}</li>
              <li className='descriptionstore'>{data[0].description}</li>
            </div>


            <div className='fullcartochka23'>

              <div className='fullcartochka2'>
                <img src="/img/free-icon-hanger-8485026.png" alt="" className='starimg' />
                <li className='fullfit'>Примерка</li>
              </div>

              <div className='fullcartochka3'>
                <img src="/img/free-icon-return-box-7788347.png" alt="" className='starimg' />
                <li className='fullfit'>14 суток на возврат товара</li>
              </div>
            </div>
          </div>

          <div className='cartochkasendmain'>
            <div className='cartochkasend'>

              <li className='costcartochka'>{data[0].price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}₽</li>

              <img src="/img/free-icon-heart-shape-outline-254242.png" alt="" className='love1' />
              <img src="/img/heart-shape-outline1.png" alt="" className='love2' />

              {isLogged ?
                <div className='sendcartmain' onClick={addToCart} style={{ cursor: 'pointer' }}>
                  <li className='textsend'>Добавить в корзину</li>
                  <img src="/img/add-cart.png" alt="" className='imgcartsend' />
                </div> :
                <div className='sendcartmain' onClick={ToastFunction} style={{ cursor: 'pointer' }}>
                  <li className='textsend'>Добавить в корзину</li>
                  <img src="/img/add-cart.png" alt="" className='imgcartsend' />
                </div>}
            </div>
          </div>
        </> : <svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
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




        <div className='reviewmain'>

          <div className='reviews'>
            <li className='reviews1'>Отзывы <sup style={{ fontSize: '14px' }}>3</sup></li>
            <Link to={'/FullReview/' + id} style={{ color: 'black' }}><li className='fullrev' >Посмотреть все отзывы  </li></Link>
          </div>

          {/* {isLogged ?
            <div className='type_rev'>
              <Link to='/AddReview'><li className='text_type_rev' >Написать отзыв</li></Link>
            </div>
            :
            <div className='type_rev'>
              <li className='text_type_rev' onClick={ToastFunction}>Написать отзыв</li>
            </div>
          } */}

          <ToastReturn />
          <div style={{ height: '100px' }}>




            <div className='reviewsend'>
              <img src="/img/free-icon-user-1144760.png" alt="" className='userreview' />
              <div className='RatingStarMain'>
                <svg class="rating__star reviewrating" width="20" height="20" viewBox="0 0 20 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="none" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="white" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="none" stroke='black' />
                    </g>
                  </g>
                </svg>
              </div>
              <li className='username'>Имя пользователя</li>
              <li className='datapost'>дата отзыва</li>
              <li className='textrev' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta, vel ea dignissimos, cumque mollitia, delectus rerum aperiam culpa fugit hic. At totam nemo pariatur hic sapiente dolorem fugiat rerum.</li>
            </div>

            <div className='reviewsend'>
              <img src="/img/free-icon-user-1144760.png" alt="" className='userreview' />

              <div className='RatingStarMain'>
                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="none" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="white" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="none" stroke='black' />
                    </g>
                  </g>
                </svg>
              </div>

              <li className='username'>Имя пользователя</li>
              <li className='datapost'>дата отзыва</li>
              <li className='textrev' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta, vel ea dignissimos, cumque mollitia, delectus rerum aperiam culpa fugit hic. At totam nemo pariatur hic sapiente dolorem fugiat rerum.</li>
            </div>

            <div className='reviewsend'>
              <img src="/img/free-icon-user-1144760.png" alt="" className='userreview' />

              <div className='RatingStarMain'>
                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="none" stroke='black' />
                    </g>
                  </g>
                </svg>

                <svg class="rating__star reviewrating" width="32" height="32" viewBox="0 0 32 32">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="white" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="none" stroke='black' />
                    </g>
                  </g>
                </svg>
              </div>

              <li className='username'>Имя пользователя</li>
              <li className='datapost'>дата отзыва</li>
              <li className='textrev' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta, vel ea dignissimos, cumque mollitia, delectus rerum aperiam culpa fugit hic. At totam nemo pariatur hic sapiente dolorem fugiat rerum.</li>
            </div>



          </div>


        </div>

        {isLogged ?

          <div className='addReview'>
            <AddReview id={id} />
          </div>
          :

          <></>

        }

      </div>

    </>
  );
}

export default App;