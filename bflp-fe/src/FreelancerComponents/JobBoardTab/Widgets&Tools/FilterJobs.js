import React, { useState } from 'react';
import { ReactComponent as Clear } from '../assets/clear-24px.svg';
import { ReactComponent as Check } from '../assets/done-24px.svg';
import { getSubList } from '../HelperFunctions/HelperFunctions';

export const FilterJobs = ({ setFilteroptions, filteroptions }) => {
	const [openfilter, setOpenfilter] = useState(false);
	const [goGray, setGoGray] = useState(false);
	const [activeBox, setActiveBox] = useState();
	const [selectedCat, setSelectedCat] = useState('');
	const [specs, setSpecs] = useState([]);

	const unclick = () => {
		setSelectedCat('');
		setActiveBox('');
	};

	const click = (index, item) => {
		setSelectedCat(item);
		setActiveBox(index);
	};

	const handleSubmit = () => {
		setFilteroptions({
			...filteroptions,
			field: selectedCat,
			specialization: [...specs],
		});
		setOpenfilter(false);
	};

	const populateArray = (item) => {
		var tempArr = [...specs];

		if (tempArr.includes(item)) {
			const index = tempArr.indexOf(item);
			tempArr.splice(index, 1);
			setSpecs(tempArr);
		} else {
			tempArr.push(item);
			setSpecs(tempArr);
		}
	};

	const styleSpecs = (item) => {
		if (specs.includes(item)) {
			return 'toggleSpec';
		} else {
			return 'spec-items';
		}
	};

	const cats = ['Web Development', 'App Development', 'Game Development', 'Design & Creative', 'Data Science', 'IT'];
	return (
		<div className="filter">
			{openfilter && (
				<div
					className="screen-overlay-dark"
					onClick={() => {
						setGoGray(false);
						setOpenfilter(false);
					}}
				>
					{' '}
				</div>
			)}
			<div
				className="filter-button"
				onClick={() => {
					setOpenfilter(!openfilter);
					setGoGray(!goGray);
				}}
			>
				<p>Category Filter</p>
			</div>
			<div className={openfilter ? 'filter-options' : 'nofilterop'}>
				<div className="filter-header">
					<span>Category Filters</span>
					<div
						onClick={() => {
							setOpenfilter(false);
						}}
						className="svgdvi"
					>
						<Clear />
					</div>
				</div>
				<span className="category-header"> Select a category </span>

				<ul className="categories-drop">
					{cats.map((item, index) => (
						<div key={index} className="category-items">
							<div
								onClick={() => {
									activeBox === index ? unclick() : click(index, item);
								}}
								className={index === activeBox ? 'checkbox-activate' : 'checkbox'}
							>
								<Check />
							</div>
							<li className="category-text">{item}</li>
						</div>
					))}
				</ul>

				{selectedCat && (
					<div>
						<p className="spec-header"> Select Specializations </p>

						<div className={specs.length >= 1 ? 'spec-len' : 'spec-len-hide'}>
							<p>{`(${specs.length} selected)`}</p>
							<span
								onClick={() => {
									setSpecs([]);
								}}
							>
								clear
							</span>
						</div>

						<ul className="spec-drop">
							{getSubList(selectedCat).map((item, index) => (
								<div
									onClick={() => {
										populateArray(item);
									}}
									key={index}
									className={styleSpecs(item)}
								>
									<li>{item}</li>
								</div>
							))}
						</ul>
					</div>
				)}

				{specs.length ? (
					<button
						className="footb"
						onClick={() => {
							handleSubmit();
						}}
					>
						{' '}
						save
					</button>
				) : null}
			</div>
		</div>
	);
};
