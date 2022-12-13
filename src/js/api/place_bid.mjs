export async function placeBid(url, amount, key) {
	const options = {
		method: "POST",
		body: JSON.stringify({
			amount: amount,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: key,
		},
	};
	const response = await fetch(url, options);
	return response;
}
