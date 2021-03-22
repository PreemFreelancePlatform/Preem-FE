import React, { useState, useEffect } from 'react';
import '../styles/Shared-Styles/Landing.css';
import { ReactComponent as Logo } from '../assets/adwords.svg';
import { Link } from 'react-router-dom';

export const Landing = () => {
	return (
		<div>
			<Link to="/login">Login</Link>
		</div>
	);
};
