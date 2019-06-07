import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';
import List from '../List';
import PokemonService from './PokemonService';

export const headers = [
	{ key: 'image', label: 'Image', type: 'image' },
	{ key: 'id', label: 'ID', type: 'id' },
	{ key: 'name', label: 'Name', type: 'main' },
	{ key: 'types', label: 'Types', type: 'list' },
	{ key: 'abilities', label: 'Abilities', type: 'list' },
	{ key: 'height', label: 'Height', type: 'number' },
	{ key: 'weight', label: 'Weight', type: 'number' },
];

export default function PokemonList() {
	const [isLoading, setLoading] = useState();
	const collection = PokemonService.readCache();

	useEffect(() => {
		if (collection) {
			return;
		}

		setLoading(true);
		PokemonService.get().then(() => {
			setLoading(false);
		});
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return <List collection={collection} headers={headers} id="pokemon-list" title="Pokemon list" />;
}
