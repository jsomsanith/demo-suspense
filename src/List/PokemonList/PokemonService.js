let cache = null;

function readCache() {
	return cache;
}

function get() {
	return fetch('/assets/pokemons.json')
		.then(resp => resp.json())
		.then(pokemons => {
			cache = pokemons;
		});
}

export default {
	readCache,
	get,
};
