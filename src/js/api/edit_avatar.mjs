export async function putAvatar(url, avatarUrl, key) {
	const options = {
		method: "PUT",
		body: JSON.stringify({
			avatar: avatarUrl,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: key,
		},
	};
	const response = await fetch(url, options);
}
