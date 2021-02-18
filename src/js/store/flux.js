const getState = ({ getStore, getActions, setStore }) => {
	return {
		// store: {
		// 	demo: [
		// 		{
		// 			title: "FIRST",
		// 			initial: "white"
		// 		},
		// 		{
		// 			title: "SECOND",
		// 			initial: "white"
		// 		}
		// 	]
		// },
		// actions: {
		// 	// Use getActions to call a function within a fuction
		// 	exampleFunction: () => {
		// 		getActions().changeColor(0, "green");
		// 	},
		// 	loadSomeData: () => {
		// 		/**
		// 			fetch().then().then(data => setStore({ "foo": data.bar }))
		// 		*/
		// 	},
		// 	changeColor: (index, color) => {
		// 		//get the store
		// 		const store = getStore();

		// 		//we have to loop the entire demo array to look for the respective index
		// 		//and change its color
		// 		const demo = store.demo.map((elm, i) => {
		// 			if (i === index) elm.background = color;
		// 			return elm;
		// 		});

		// 		//reset the global store
		// 		setStore({ demo: demo });
		// 	}
		// }
		store: {
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			loadPeople: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const info = await response.json();
				setStore({ people: info.results });
			},

			loadPlanet: async () => {
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
			}
		}
	};
};

export default getState;
