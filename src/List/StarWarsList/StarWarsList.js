import React from 'react';
import List from '../List';
import collection from '../../assets/starwars';

export const headers = [
	{ key: 'id', label: 'ID', type: 'id' },
	{ key: 'name', label: 'Name', type: 'main' },
	{ key: 'gender', label: 'Gender' },
	{ key: 'birth_year', label: 'Birth year' },
	{ key: 'height', label: 'Height', type: 'number' },
	{ key: 'mass', label: 'Mass', type: 'number' },
];

export default function StarWarsList() {
	return (
		<List collection={collection} headers={headers} id="starwars-list" title="Star wars list" />
	);
}
