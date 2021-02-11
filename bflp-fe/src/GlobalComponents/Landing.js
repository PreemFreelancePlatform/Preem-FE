import React, { useState, useEffect } from 'react';
import '../styles/Shared-Styles/Landing.css';
import picture from '../pics/benedikt-jaletzke-rbP4Mut0MA0-unsplash.jpg';
import { ReactComponent as Logo } from '../assets/adwords.svg';

/*
bflp-fe\src\pics\benedikt-jaletzke-rbP4Mut0MA0-unsplash.jpg
bflp-fe\src\pics\jack-b-o1radglopDA-unsplash.jpg
bflp-fe\src\pics\kristopher-roller-zepnJQycr4U-unsplash.jpg
bflp-fe\src\pics\robert-katzki-jbtfM0XBeRc-unsplash.jpg

*/

export const Landing = () => {
	const [slide, setslide] = useState(true);
	const [time, setTime] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setslide(!slide);
			setTime(time + 1);
			console.log(slide);
		}, 8000);

		if (time === 100) {
			clearInterval(timer);
		}
	}, [time]);

	// YOU NEED TO CHANGE THIS PRONTO ITS SUPER NOT EFFECIENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	return (
		<div>
			<img className="picture" src={picture} />
			<div className="blurred-box">
				<div className="landing-nav">
					<div className="landinglogo">
						<Logo />
						<span>logo</span>
					</div>
					<div className="landing-nav-items">
						<li>Home</li>
						<li>About us</li>
						<li>How it Works</li>
					</div>
					<button className="sign-upb">Sign up</button>
				</div>

				<div className="slide-panel">
					<div className={slide ? 'slideLeft' : 'landing-info'}>
						<h1 className="bigboy">Some awesome freelancer info.</h1>
						<p className="smallboy">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore.
						</p>
					</div>
					<div className={slide ? 'slideLeft-2' : 'landing-info-2'}>
						<h1 className="bigboy">Some awesome customer info.</h1>
						<p className="smallboy">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore.
						</p>
					</div>
					<button className="clicky">Try for free</button>
				</div>
			</div>
		</div>
	);
};
