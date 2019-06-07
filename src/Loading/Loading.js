import React from 'react';
import logo from './logo.svg';

import './Loading.css';

export default function Loading() {
	return (
		<div className="loading">
			<img src={logo} alt="Loading" className="loading-logo" />
		</div>
	);
}
