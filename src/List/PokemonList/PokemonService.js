import { unstable_createResource } from 'react-cache';

const PokemonsResource = unstable_createResource(() => {
	return fetch(`/assets/pokemons.json`).then(resp => resp.json());
});

export default PokemonsResource;
