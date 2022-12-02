import { baseUrl } from "/src/js/constants.mjs";
import { save, load } from "/src/js/storage/storage.mjs";

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
			email: email.trim(),
			password: password.trim(),
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

/**
 * Register a new user account on the Moments website.
 * All necessary parameters are defined inside the function.
 */
export async function registerUser() {
	const registerName = document.getElementById("name");
	const registerEmail = document.getElementById("register-email");
	const registerPassword = document.getElementById("register-password");
	const registerAvatar = document.getElementById("avatar");
	if (registerAvatar.value === "") {
		registerAvatar.value = "https://xsgames.co/randomusers/assets/avatars/pixel/14.jpg";
	}
	const registerOptions = {
		method: "POST",
		body: JSON.stringify({
			name: registerName.value.trim(),
			email: registerEmail.value.trim(),
			avatar: registerAvatar.value.trim(),
			password: registerPassword.value.trim(),
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	};
	const response = await fetch(`${baseUrl}/auth/register`, registerOptions);
	if (response.status != 201) {
		const displayErr = document.getElementById("err-display");
		displayErr.classList.remove("d-none");
		displayErr.classList.add("d-flex");
		return false;
	}
	return true;
}

export function loginVisibility(isLogin) {
	const loginBtn = document.getElementById("login-btn");
	const logoutBtn = document.getElementById("logout-btn");
	const loginRedirection = document.querySelectorAll('[data-bs-target="#loginModal"]');
	loginBtn.classList.add("d-none");
	logoutBtn.classList.remove("d-none");
	loginRedirection.forEach((element) => {
		delete element.dataset.bsTarget;
		delete element.dataset.bsToggle;
	});
}

export function isLogin() {
	if (load("token")) {
		return true;
	}
	return false;
}

export function logoutUser() {
	const logoutBtn = document.getElementById("logout-btn");
	logoutBtn.addEventListener("click", (event) => {
		localStorage.clear();
		location.reload();
	});
}
