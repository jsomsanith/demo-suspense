import React from 'react';
import List from '../List';
import collection from '../../assets/pokemons';

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
	return <List collection={collection} headers={headers} id="pokemon-list" title="Pokemon list" />;
}
