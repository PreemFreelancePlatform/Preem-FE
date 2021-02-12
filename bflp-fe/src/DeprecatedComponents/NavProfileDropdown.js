import React, { useState, useEffect } from 'react';
import { ReactComponent as Lefticon } from '../assets/arrow_back_ios-24px.svg';
import { ReactComponent as Righticon } from '../assets/arrow_forward_ios-24px.svg';
import { ReactComponent as Filticon } from '../assets/filter_list-24px.svg';
import { ReactComponent as Webicon } from '../assets/grid_on-24px.svg';
import { ReactComponent as Specicon } from '../assets/work-24px.svg';
import { ReactComponent as Mmicon } from '../assets/local_atm-24px.svg';
import { getSubList } from '../HelperFunctions/HelperFunctions';

export const TopDropDown = ({}) => {
	const [slide, setSlide] = useState(false);

	const [specArray, setSpecArray] = useState();
	const [category, setCategory] = useState();
	const [specialization, setSpecialization] = useState([]);
	const [minMax, setMinMax] = useState({
		min: '',
		max: '',
	});

	const [RenderComp, setRenderComp] = useState('');

	const handleChange = (e) => {
		setMinMax({
			...minMax,
			[e.target.name]: e.target.value,
		});
	};
	console.log(specialization);

	const categories = [
		'Web Development',
		'App Development',
		'Game Development',
		'Design & Creative',
		'Data Science',
		'IT',
	];

	const onSubmit = (e) => {};

	const specFunction = () => {
		if (specialization) {
			if (specialization.length > 0) {
				if (specialization.length === 1) {
					return <span>{specialization}</span>;
				} else if (specialization.length > 1) {
					return <span>{`${specialization.length} Selected`}</span>;
				}
			} else {
				return <span>Select Specialty</span>;
			}
		} else {
			return <span>Select Specialty</span>;
		}
	};

	return (
		<div className="filter">
			<div className={openfilter ? 'openfilter' : 'closefilter'}>
				<ul className={slide ? 'showright' : 'showleft'}>
					<div className="filter-left">
						<div className="border">
							<div
								onClick={() => {
									setSlide(true);
									setRenderComp('cat');
								}}
								className="menu-item"
							>
								<span>{category ? category : 'Select Category'}</span>
								<Righticon />
							</div>
						</div>
						<div className="border">
							<div
								onClick={() => {
									if (category) {
										setSlide(true);
										setRenderComp('spec');
									} else {
										alert('select category first');
									}
								}}
								className="menu-item"
							>
								<span>{specFunction()}</span>
								<Righticon />
							</div>
						</div>

						<div>
							<form className="minmaxform">
								<input
									type="number"
									name="min"
									value={minMax.min}
									onChange={handleChange}
									placeholder="Min"
								/>
								-
								<input
									type="number"
									name="max"
									value={minMax.max}
									onChange={handleChange}
									placeholder="Max"
								/>
							</form>
						</div>

						<button
							onClick={() => {
								onSubmit();
							}}
							className="submitfilter"
						>
							Filter!
						</button>
					</div>
					{RenderComp === 'cat' ? (
						<div className="filter-right">
							<div
								onClick={() => {
									setSlide(false);
								}}
								className="menu-back-div"
							>
								<div className="menu-item-back">
									<Lefticon />
								</div>
								<span>Go Back</span>
							</div>
							{categories.map((item, index) => (
								<div
									onClick={() => {
										setCategory(item);
										setSlide(false);
										setSpecArray(getSubList(item));
									}}
									className="menu-item"
								>
									<span>{item}</span>
								</div>
							))}
						</div>
					) : (
						<div className="filter-right">
							<div
								onClick={() => {
									setSlide(false);
								}}
								className="menu-back-div"
							>
								<div className="menu-item-back">
									<Lefticon />
								</div>
								<span>Go Back</span>
							</div>
							{specArray
								? specArray.map((item, index) => (
										<div
											onClick={() => {
												setSlide(false);
											}}
											className="menu-item"
										>
											<span>{item}</span>
										</div>
								  ))
								: ''}
						</div>
					)}
				</ul>
			</div>
		</div>
	);
};
