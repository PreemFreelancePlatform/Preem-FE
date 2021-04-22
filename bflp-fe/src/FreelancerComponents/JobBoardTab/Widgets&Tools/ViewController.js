import React from 'react';
import { ReactComponent as Grid } from '../../../assets/dashicons/grid.svg';
import { ReactComponent as List } from '../../../assets/dashicons/list-text.svg';

export const ViewController = ({ setView, view }) => {
	return (
		<div className="view-cont">
			<div
				onClick={() => {
					setView('row');
				}}
				className={view === 'row' ? 'ls-active' : 'ls'}
			>
				<List />
			</div>
			<div
				onClick={() => {
					setView('grid');
				}}
				className={view === 'grid' ? 'rs-active' : 'rs'}
			>
				<Grid />
			</div>
		</div>
	);
};
