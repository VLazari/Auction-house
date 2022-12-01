import * as auth from "/src/js/auth/auth.mjs";
import { load } from "/src/js/storage/storage.mjs";
import { baseUrl } from "/src/js/constants.mjs";

import apiKey from "/apikey.mjs";
console.log(apiKey);

// localStorage.clear();

const loginBtn = document.getElementById("login-btn");

function regUser() {
	const register = document.getElementById("register-form");
	register.addEventListener("submit", (event) => {
		event.preventDefault();
		auth.registerUser();
	});
}
regUser();

function logUser() {
	const login = document.getElementById("login-form");
	const loginModal = new bootstrap.Modal("#loginModal");
	const loginError = document.getElementById("login-error");

	login.addEventListener("submit", async (event) => {
		const email = document.getElementById("login-email");
		const pass = document.getElementById("login-password");
		event.preventDefault();

		const status = await auth.loginUser(email.value, pass.value);

		if (!status) {
			loginError.classList.remove("d-none");
		} else {
			loginModal.hide();
		}
	});
}
logUser();

import { displayList } from "/src/js/elements/listing.mjs";
import { getData } from "/src/js/api/get_listing.mjs";
const url = `${baseUrl}/listings?_seller=true&_bids=true`;

const data = await getData(url);
displayList(data);

import { countdown } from "/src/js/timer.mjs";
const itemTimer = document.querySelectorAll(".timer");

function test() {
	itemTimer.forEach((e) => {
		countdown(e.dataset.expDate, e.childNodes[0], e.childNodes[2], e.childNodes[4], e.childNodes[6]);
	});
}
setInterval(test, 1000);
