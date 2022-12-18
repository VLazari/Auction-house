import * as auth from "/src/js/auth/auth.mjs";
import { baseUrl } from "/src/js/constants.mjs";
import { displayList } from "/src/js/elements/listing.mjs";
import { getData } from "/src/js/api/get_listing.mjs";
import { countdown } from "/src/js/timer.mjs";
import { searchList } from "./src/js/search/search.mjs";
const loginModal = document.getElementById("loginModal");
const url = `${baseUrl}/listings?_seller=true&_bids=true&_active=true&sort=created&sortOrder=desc`;
export const allList = await getData(url);
displayList(allList);

function status() {
	if (auth.isLogin()) auth.loginVisibility(true);
}
status();

function regUser() {
	const register = document.getElementById("register-form");
	const registerModal = document.getElementById("registerModal");
	register.addEventListener("submit", (event) => {
		event.preventDefault();
		const isRegister = auth.registerUser();
		if (isRegister) {
			registerModal.classList.remove("show");
			loginModal.classList.add("show");
		}
	});
}
regUser();

function logUser() {
	const loginForm = document.getElementById("login-form");
	const loginError = document.getElementById("login-error");
	loginForm.addEventListener("submit", async (event) => {
		const email = document.getElementById("login-email");
		const pass = document.getElementById("login-password");
		event.preventDefault();
		const status = await auth.loginUser(email.value, pass.value);
		if (!status) {
			loginError.classList.remove("d-none");
		} else {
			auth.loginVisibility(true);
			loginModal.classList.remove("show");
		}
	});
}
logUser();

function timer() {
	const itemTimer = document.querySelectorAll(".timer");
	itemTimer.forEach((e) => {
		countdown(e.dataset.expDate, e.childNodes[0], e.childNodes[2], e.childNodes[4], e.childNodes[6]);
	});
}
setInterval(timer, 1000);

setInterval(searchList(allList), 1000);

console.log("aaaaaaaaa");
