let cache = null;

function readCache() {
	if (cache) {
		return cache;
	}
	throw get();
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
