import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FullReview.css';
import '../AddReview/AddReview.scss';
import urlPhp from '../urlPhp.jsx';
import { useParams } from 'react-router-dom';


function FullReviewCard(props) {
    const rating = Number(props.rating);
    const emptyStars = 5 - rating;
    return (
        <>
            <hr />
            <div className='Review'>
                <div className='Reviewimg'>
                    <img src={URL.createObjectURL(props.user_avatar)} alt="" className='UserReview' />
                    {/* map method to display the stars based on the number of stars which contains in constant 'rating', then create 5-rating start with fill="none"*/}
                    {[...Array(rating)].map((_, i) => (
                        <svg class="rating__star rrr" width="32" height="32" viewBox="0 0 32 32">
                            <g transform="translate(16,16)">
                                <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                            </g>
                            <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <g transform="translate(16,16) rotate(180)">
                                    <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="#000" stroke='black' />
                                </g>
                            </g>
                        </svg>
                    ))}
                    {[...Array(emptyStars)].map((_, i) => (
                        <svg class="rating__star rrr" width="32" height="32" viewBox="0 0 32 32">
                            <g transform="translate(16,16)">
                                <circle class="rating__star-ring" fill="black" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                            </g>
                            <g stroke='black' stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <g transform="translate(16,16) rotate(180)">
                                    <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41, 6.07" fill="none" stroke='black' />
                                </g>
                            </g>
                        </svg>
                    ))}
                </div>

                <div className='ReviewText'>
                    <li className='UserName'>{props.user_login}</li>
                    <li className='DataPost'>{props.created_at}</li>
                    <li className='TextRev' >{props.content}</li>
                </div>
            </div>
        </>
    )
}

export default FullReviewCard;