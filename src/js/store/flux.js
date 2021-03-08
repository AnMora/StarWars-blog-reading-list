const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [], //contenedores
			planets: [], //contenedores
			vehicles: [], //contenedores
			favorites: [], //contenedores
			boolean: false
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
			},

			// VALIDACIONES
			// VALIDACIONES
			// VALIDACIONES

			// VALIDACION DE REGISTER
			// VALIDACION DE REGISTER
			// VALIDACION DE REGISTER
			validacionRegistro: (username, email, password) => {
				fetch("https://3000-white-cardinal-sk1fnk07.ws-us03.gitpod.io//register/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name: username, email: email, password: password })
				})
					.then(response => response.json())
					.then(data => {
						console.table("success", data);
						setRedirect(true);
						return alert("Usted no ha sido registrado!, favor intentar de nuevo!");
					})
					.catch(error => {
						console.table("Error", error);
						return alert(
							"Usted ha sido registrado exitosamente!, por favor ahora ingrese sus datos en Login para acceder a la página!"
						);
					});
			},
			// VALIDACION DE LOGIN
			// VALIDACION DE LOGIN
			// VALIDACION DE LOGIN
			// validacionLogin: (email, password) => {
			// 	fetch("https://3000-crimson-mule-9csox4pg.ws-us03.gitpod.io/login/")
			// 		.then(res => {
			// 			if (res.ok) res.json();
			// 			// eso en caso que sea 200
			// 			else if (res.status === 401) {
			// 				alert("Credenciales invalidos"); // culpa del usuario
			// 			} else if (res.status === 400) {
			// 				alert("Formato de email o password incorrecto!"); // culpa de autenticacion
			// 			} else throw Error("Error desconocido!"); //
			// 		})
			// 		.then(data => {
			// 			localStorage.setItem("jwt-token", data.token);
			// 		})
			// 		.catch(error => console.error("Uknown error around!", error));
			// }

			validacionLogin: async (email, password) => {
				const url = "https://3000-white-cardinal-sk1fnk07.ws-us03.gitpod.io//login/";
				const response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: email,
						password: password
					})
				});
				const body = await response.json();
				console.log(body);
				if (body.status) {
					sessionStorage.setItem("u_token", body.token);
					sessionStorage.setItem("status", body.status);
					setStore({ boolean: true });
				} else {
					console.log("Porfavor vuelvelo a intentar!");
				}
			},

			logout: () => {
				setStore({ boolean: false });
			}
		}
	};
};

export default getState;
