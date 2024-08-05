import { helpHttp } from "../Helpers/helpHttp";
import { URL_API, ALL_USERS, USER_BY_ID } from "../Helpers/route_api";

export const clientController = () => {
	const getAll = async () => {
		const url = URL_API + ALL_USERS;
		return helpHttp()
			.get(url)
			.then((res) => res);
	};

	return {
		getAll,
	};
};

const getUsers = () => {
	return new Promise(async (resolve, reject) => {
		const url = "www.google.com/cat";
		const res = await fetch(url).catch((err) => reject(err));
		if (res) {
			data = res.json();
			resolve(data[0].user);
		}
	});
};

/*

const getAll = async () => {
		let data = await helpHttp()
			.get(URL_API + ALL_USERS)
			.then((res) => res);
		console.log(data);
		return data;
	};

	*/

/*


		return new Promise((resolve, reject) => {
			const url = URL_API + ALL_USERS;
			console.log("hello4");
			const res = fetch(url)
				.then((response) => {
					console.log(response);
					//response.json();
					resolve(response.json());
				})
				.catch((err) => reject(err));
			console.log("hello5");
		});
	*/
