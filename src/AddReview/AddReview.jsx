
import React from 'react';
import { useState } from 'react';
import urlPhp from '../urlPhp.jsx';
import url from '../url.jsx';

// import { Link } from 'react-router-dom';
import '../Reg/Reg.css';
import './AddReview.scss';


function AddReview(id) {
	const [card, setCard] = useState();
	let review = '';
	let rating = '';
	function addReview() {
		review = document.querySelector("#review").value;
		rating = document.querySelector('input[name="rating"]:checked').value;

		fetch(urlPhp + 'addReview.php?review=' + review + '&rating=' + rating + '&product_id=' + Number(id.id) + '&user_id=' + localStorage.getItem('user_id'))
		window.location.href = '/FullReview/' + id.id;

	}




	window.addEventListener("DOMContentLoaded", () => {
		const starRating = new StarRating("form");
	});

	class StarRating {
		constructor(qs) {
			this.ratings = [
				{ id: 1, name: "какашка" },
				{ id: 2, name: "Bad" },
				{ id: 3, name: "OK" },
				{ id: 4, name: "Good" },
				{ id: 5, name: "Excellent" }
			];
			this.rating = null;
			this.el = document.querySelector(qs);

			this.init();
		}
		init() {
			this.el?.addEventListener("change", this.updateRating.bind(this));

			// stop Firefox from preserving form data between refreshes
			try {
				this.el?.reset();
			} catch (err) {
				console.error("Element isn’t a form.");
			}
		}
		updateRating(e) {
			// clear animation delays
			Array.from(this.el.querySelectorAll(`[for*="rating"]`)).forEach(el => {
				el.className = "rating__label";
			});

			const ratingObject = this.ratings.find(r => r.id === +e.target.value);
			const prevRatingID = this.rating?.id || 0;

			let delay = 0;
			this.rating = ratingObject;
			this.ratings.forEach(rating => {
				const { id } = rating;

				// add the delays
				const ratingLabel = this.el.querySelector(`[for="rating-${id}"]`);

				if (id > prevRatingID + 1 && id <= this.rating.id) {
					++delay;
					ratingLabel.classList.add(`rating__label--delay${delay}`);
				}

				// hide ratings to not read, show the one to read
				const ratingTextEl = this.el.querySelector(`[data-rating="${id}"]`);

				if (this.rating.id !== id)
					ratingTextEl.setAttribute("hidden", true);
				else
					ratingTextEl.removeAttribute("hidden");
			});
		}
	}



	return (
		<>
			<div className="form">
				<div className="form__content">

					<h1>Напишите отзыв</h1>


					<form class="rating">
						<div class="rating__stars">
							<input id="rating-1" class="rating__input rating__input-1" type="radio" name="rating" value="1" />
							<input id="rating-2" class="rating__input rating__input-2" type="radio" name="rating" value="2" />
							<input id="rating-3" class="rating__input rating__input-3" type="radio" name="rating" value="3" />
							<input id="rating-4" class="rating__input rating__input-4" type="radio" name="rating" value="4" />
							<input id="rating-5" class="rating__input rating__input-5" type="radio" name="rating" value="5" />
							<label class="rating__label" for="rating-1">
								<svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
									<g transform="translate(16,16)">
										<circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
									</g>
									<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<g transform="translate(16,16) rotate(180)">
											<polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
											<polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
										</g>
										<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
											<polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
										</g>
									</g>
								</svg>
								<span class="rating__sr">1 star—какашка</span>
							</label>
							<label class="rating__label" for="rating-2">
								<svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
									<g transform="translate(16,16)">
										<circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
									</g>
									<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<g transform="translate(16,16) rotate(180)">
											<polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
											<polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
										</g>
										<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
											<polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
										</g>
									</g>
								</svg>
								<span class="rating__sr">2 stars—Bad</span>
							</label>
							<label class="rating__label" for="rating-3">
								<svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
									<g transform="translate(16,16)">
										<circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
									</g>
									<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<g transform="translate(16,16) rotate(180)">
											<polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
											<polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
										</g>
										<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
											<polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
										</g>
									</g>
								</svg>
								<span class="rating__sr">3 stars—OK</span>
							</label>
							<label class="rating__label" for="rating-4">
								<svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
									<g transform="translate(16,16)">
										<circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
									</g>
									<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<g transform="translate(16,16) rotate(180)">
											<polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
											<polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
										</g>
										<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
											<polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
										</g>
									</g>
								</svg>
								<span class="rating__sr">4 stars—Good</span>
							</label>
							<label class="rating__label" for="rating-5">
								<svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
									<g transform="translate(16,16)">
										<circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
									</g>
									<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<g transform="translate(16,16) rotate(180)">
											<polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
											<polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
										</g>
										<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
											<polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
											<polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
										</g>
									</g>
								</svg>
								<span class="rating__sr">5 stars—Excellent</span>
							</label>
							<p class="rating__display" data-rating="1" hidden>Какашка :(</p>
							<p class="rating__display" data-rating="2" hidden>Плохо</p>
							<p class="rating__display" data-rating="3" hidden>Неплохо</p>
							<p class="rating__display" data-rating="4" hidden>Хорошо</p>
							<p class="rating__display" data-rating="5" hidden>Великолепно</p>
						</div>
					</form>



					<div className="form__box">
						<textarea style={{ resize: 'none' }} type="text" id='review' className="form__input" placeholder="Комментарий о товаре" />
						<label for="" className="form__label">  </label>
						<div className="form__shadow"></div>
					</div>



					<div className="form__button">
						{/* <span onClick={register}>penis</span> */}
						<input onClick={addReview} type="Submit" className="form__submit" value="Оставить отзыв" />
					</div>
				</div>
			</div>
		</>
	);
}

export default AddReview;
