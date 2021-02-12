import React, { useState } from 'react';
import { ReactComponent as Moneyicon } from '../../../assets/attach_money-24px.svg';
import { ReactComponent as Clear } from '../../../assets/clear-24px.svg';

export const BudgetFilter = ({ setFilteroptions, filteroptions }) => {
	const [budgetfilter, setBudgetFilter] = useState(false);
	const [minNum, setMinNum] = useState('');
	const [maxNum, setMaxNum] = useState('');

	const handleSubmit = () => {
		setFilteroptions({
			...filteroptions,
			min: minNum,
			max: maxNum,
		});
		setBudgetFilter(false);
	};

	const showinput = () => {
		return !filteroptions.min && filteroptions.max ? (
			<p>{`less than ${filteroptions.max}`}</p>
		) : filteroptions.min && !filteroptions.max ? (
			<p>{`more than ${filteroptions.min}`}</p>
		) : filteroptions.min && filteroptions.max ? (
			<p>{`$${filteroptions.min} - $${filteroptions.max}`}</p>
		) : (
			<p>Budget Filter</p>
		);
	};

	return (
		<div className="filter">
			{budgetfilter && (
				<div
					onClick={() => {
						setBudgetFilter(false);
					}}
					className="screen-overlay"
				>
					{' '}
				</div>
			)}

			<div
				className="price-button"
				onClick={() => {
					setBudgetFilter(!budgetfilter);
				}}
			>
				{showinput()}
			</div>
			{filteroptions.min || filteroptions.max ? (
				<div
					onClick={() => {
						setFilteroptions({
							...filteroptions,
							min: '',
							max: '',
						});
					}}
					className="clear"
				>
					<Clear />
				</div>
			) : null}

			{budgetfilter && (
				<div className="showprice">
					<form className="minmaxform">
						<span className="mn-span">min budget</span>
						<div className="iconmin">
							<Moneyicon />
						</div>
						<input
							type="number"
							name="minNum"
							value={minNum}
							onChange={(e) => {
								setMinNum(e.target.value);
							}}
							placeholder="1"
						/>
						-<span className="mx-span">max budget</span>
						<div className="iconmax">
							<Moneyicon />
						</div>
						<input
							type="number"
							name="maxNum"
							value={maxNum}
							onChange={(e) => {
								setMaxNum(e.target.value);
							}}
							placeholder="1000+"
						/>
					</form>
					<button onClick={handleSubmit} className="btnp">
						Save
					</button>
				</div>
			)}
		</div>
	);
};
