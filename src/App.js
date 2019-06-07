import React, { useState } from 'react';
import HeaderBar from './HeaderBar';

import NoList from './List/NoList';
import PokemonList from './List/PokemonList';
import StarWarsList from './List/StarWarsList';

import ListCategories from './List/categories';
import './App.css';

function App() {
	const [menu, setMenu] = useState();

	return (
		<div>
			<HeaderBar onMenuChange={setMenu} />

			<div className="body">
				{!menu && <NoList />}
				{menu === ListCategories.POKEMONS && <PokemonList />}
				{menu === ListCategories.STAR_WARS && <StarWarsList />}
			</div>
		</div>
	);
}

export default App;
