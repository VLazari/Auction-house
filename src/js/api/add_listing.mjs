/**
 * Make an API GET request and returns the response promise.
 * @param {string} url API URL for the get request
 * @param {string} key API authorization token
 * @returns {array of objects} As a promise
 */
export async function postData(url, body, key) {
	const options = {
		method: "POST",
		body: JSON.stringify({
			title: body.title,
			description: body.description,
			media: body.media,
			endsAt: body.date,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: key,
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
}
