const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [], //contenedores
			planets: [], //contenedores
			vehicles: [], //contenedores
			favorites: [] //contenedores
		},
		actions: {
			loadCharacters: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const info = await response.json();
				setStore({ characters: info.results });
			},

			loadPlanets: async () => {
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const info = await response.json();
				setStore({ planets: info.results });
			},

			loadVehicles: async () => {
				const url = "https://swapi.dev/api/vehicles/";
				const response = await fetch(url);
				const info = await response.json();
				setStore({ vehicles: info.results });
			},

			loadPeopleById: async theid => {
				const url = "https://swapi.dev/api/people/" + theid;
				const response = await fetch(url);
				const info = await response.json();
				setStore({ characters: info.results });
			},

			loadPlanetsById: async theid => {
				const url = "https://swapi.dev/api/planets/" + theid;
				const response = await fetch(url); //da respuesta, si es 200 esta bien
				const info = await response.json(); //lo serializa en formato o archivo json, tambien podria ser xml, txt
				setStore({ planets: info.results }); //reservelo en un array
			},

			loadVehiclesById: async theid => {
				const url = "https://swapi.dev/api/vehicles/" + theid;
				const response = await fetch(url);
				const info = await response.json();
				setStore({ vehicles: info.results });
			},

			//actions.addFavorite(characters.name, "character")
			addFavorite: (name, type) => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name,
								type: type
							}
						]
					});
				}
			},

			deleteFavorite: id => {
				const store = getStore();

				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
