import React from 'react';
import logo from './react-logo.png';
import './HeaderBar.scss';

export default function HeaderBar({ onMenuChange }) {
	return (
		<header className="header">
			<div className="title">
				<img src={logo} alt="react logo" /> Suspense Demo
			</div>
			<div className="header-right">
				<button className="category" onClick={() => onMenuChange('pokemons')}>
					Pokemons
				</button>
				<button className="category" onClick={() => onMenuChange('starwars')}>
					Star wars
				</button>
			</div>
		</header>
	);
}
