import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FullReview.css';
import '../AddReview/AddReview.scss';
import urlPhp from '../urlPhp.jsx';
import { useParams } from 'react-router-dom';
import FullReviewCard from './FullReviewCard.jsx';


function FullReview() {
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);
    const [reviewsLoading, setReviewsLoading] = useState(false);
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
            await fetch(urlPhp + `fetchReviews.php?product_id=${id}`)
                .then(response => response.json())
                .then(reviews => {
                    // products.image = decodeBase64ToBlob(product.image, 'image/');
                    reviews.forEach(review => {
                        // Декодирование изображения из base64
                        review.user_avatar = decodeBase64ToBlob(review.user_avatar, 'image/');
                    });
                    setReviews(reviews);
                    setReviewsLoading(true);
                })
        }
        dataFetch();
    }, []);
    return (
        <div className='FullReviewMain'>
            <div className='ReviewMain'>
                {/* map fullreviewcard based on reviews*/}
                {reviewsLoading ?
                    (
                        reviews.length !== 0 ?
                            <>
                                {reviews.map((review) => (
                                    <>
                                        <FullReviewCard
                                            id={review.id}
                                            user_login={review.user_login}
                                            user_avatar={review.user_avatar}
                                            content={review.content}
                                            rating={review.rating}
                                            created_at={review.created_at}
                                        />
                                    </>
                                ))}
                            </> : <div>Нет комментариев!</div>
                    ) : <div>Loading...</div>}







            </div>
        </div>
    )
}

export default FullReview;