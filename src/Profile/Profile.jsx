import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import urlPhp from '../urlPhp.jsx';



function Profile() {
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('email')) {
            setIsLogged(true);
        }
    }, []);
    console.log(localStorage.getItem('user_id'));
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(urlPhp + `image_display.php?user_id=${localStorage.getItem('user_id')}`)
                if (response.ok) {
                    const imageBlob = await response.blob();
                    setImageUrl(URL.createObjectURL(imageBlob));
                    console.log(imageBlob);
                } else {
                    console.error('Ошибка при получении изображения.');
                }
            } catch (error) {
                console.error('Ошибка при отправке запроса:', error);
            }
        };

        fetchImage();
    }, []);

    function logOut() {
        localStorage.removeItem('login');
        localStorage.removeItem('email');
        localStorage.removeItem('user_id');
        localStorage.removeItem('address');


        window.location.reload();
    }
    return (
        <>


            <div className='profile_main'>

                <div className='data_main'>
                    {isLogged ?
                        <>

                            {imageUrl && <img src={imageUrl} alt="Изображение" className='user_profile' />}

                            {/* <img src="../img/free-icon-user-1144760.png" alt="иконка юзера" className='user_profile' /> */}

                            <div className='user_info'>
                                <div className='user_name'>
                                    <li>{localStorage.getItem('login')}</li>
                                </div>

                                <div className='user_email'>
                                    <li>{localStorage.getItem('email')}</li>
                                </div>

                                <div className='user_adress'>
                                    <li>{localStorage.getItem('address')}</li>
                                </div>


                            </div>

                            {/* <div className='user_change_main'>
                                <button className='user_change'>Изменить данные</button>
                            </div> */}
                            <div className='user_change_main' onClick={logOut} style={{ transform: 'translateY(100%)' }}>
                                <button className='user_change2'>Выйти из аккаунта</button>
                            </div>
                        </>
                        :
                        <>
                            <div className='not_account'>
                                <h2>Вы не авторизованы</h2>
                                <Link to='/Reg' style={{ color: 'black' }}><li className='zareg'>Зарегистироваться</li></Link>
                                <Link to='/Login' style={{ color: 'black' }}><li className='voiti'>Войти</li></Link>
                            </div>

                        </>
                    }




                </div>

            </div>


        </>
    )
}

export default Profile;