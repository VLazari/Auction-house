import { baseUrl } from "/src/js/constants";
import { save } from "/src/js/storage/storage";

/**
 * User login function
 * @param {string} email user login email
 * @param {string} password user login password
 * @returns
 */
export async function loginUser(email, password) {
	const loginOptions = {
		method: "POST",
		body: JSON.stringify({
			email: email.value.trim(),
			password: password.value.trim(),
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	};
	const response = await fetch(`${baseUrl}/auth/login`, loginOptions);

	if (response.status === 200) {
		const loginData = await response.json();
		save("token", loginData.accessToken);
		delete loginData.accessToken;
		save("profile", loginData);
		return loginData;
	}

	return null;
}
