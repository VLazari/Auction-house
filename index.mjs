// import { loginUser } from "./src/js/auth/login.mjs";
import { load } from "/src/js/storage/storage.mjs";

const loginBtn = document.getElementById("login-btn");

function checkStatus() {
	if (load("token")) {
		console.log("logged in");
	} else {
		console.log("not logged in");
	}
}
checkStatus();
