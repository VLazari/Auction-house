/**
 * Make an API GET request and returns the response promise.
 * @param {string} url API URL for the get request
 * @param {string} key API authorization token
 * @returns {array of objects} As a promise
 */
export async function getData(url, key) {
	const options = {
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: key,
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
	return data;
}
