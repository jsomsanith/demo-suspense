import React, { Suspense, useState } from 'react';
import HeaderBar from './HeaderBar';
import Loading from './Loading';
import NoList from './List/NoList';

import ListCategories from './List/categories';
import './App.css';

const PokemonList = React.lazy(() =>
	import(/* webpackChunkName: "pokemon-list" */ './List/PokemonList'),
);
const StarWarsList = React.lazy(() =>
	import(/* webpackChunkName: "starwars-list" */ './List/StarWarsList'),
);

function App() {
	const [menu, setMenu] = useState();

	return (
		<div>
			<HeaderBar onMenuChange={setMenu} />

			<div className="body">
				<Suspense fallback={<Loading />}>
					{!menu && <NoList />}
					{menu === ListCategories.POKEMONS && <PokemonList />}
					{menu === ListCategories.STAR_WARS && <StarWarsList />}
				</Suspense>
			</div>
		</div>
	);
}

export default App;
