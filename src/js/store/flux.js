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
				// const url = "https://swapi.dev/api/people/";
				const url = "https://3000-harlequin-cephalopod-k8iudvag.ws-us03.gitpod.io/character";
				const response = await fetch(url);
				const info = await response.json();
				// setStore({ characters: info.results });
				setStore({ characters: info });
			},

			loadPlanets: async () => {
				const url = "https://3000-harlequin-cephalopod-k8iudvag.ws-us03.gitpod.io/planets";
				const response = await fetch(url);
				const info = await response.json();
				setStore({ planets: info });
			},

			loadVehicles: async () => {
				const url = "https://3000-harlequin-cephalopod-k8iudvag.ws-us03.gitpod.io/vehicles";
				const response = await fetch(url);
				const info = await response.json();
				setStore({ vehicles: info });
			},

			loadPeopleById: async theid => {
				const url = "https://3000-harlequin-cephalopod-k8iudvag.ws-us03.gitpod.io/character" + theid;
				const response = await fetch(url);
				const info = await response.json();
				setStore({ characters: info });
			},

			loadPlanetsById: async theid => {
				const url = "https://3000-harlequin-cephalopod-k8iudvag.ws-us03.gitpod.io/planets" + theid;
				const response = await fetch(url); //da respuesta, si es 200 esta bien
				const info = await response.json(); //lo serializa en formato o archivo json, tambien podria ser xml, txt
				setStore({ planets: info }); //reservelo en un array
			},

			loadVehiclesById: async theid => {
				const url = "https://3000-harlequin-cephalopod-k8iudvag.ws-us03.gitpod.io/vehicles" + theid;
				const response = await fetch(url);
				const info = await response.json();
				setStore({ vehicles: info });
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
