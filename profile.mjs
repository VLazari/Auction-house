import { getData } from "./src/js/api/get_listing.mjs";
import { baseUrl, key } from "/src/js/constants.mjs";
import { profileListings, profileBids } from "./src/js/elements/listing.mjs";
import { profileBuild } from "./src/js/elements/listing.mjs";
import { putAvatar } from "./src/js/api/edit_avatar.mjs";
import { save, load } from "./src/js/storage/storage.mjs";
import { isLogin } from "./src/js/auth/auth.mjs";

if (!isLogin()) {
	window.location.replace("/index.html");
}
const profile = load("profile");
const profileList = await getData(`${baseUrl}/profiles/${profile.name}?_listings=true`, key);
const profileBid = await getData(`${baseUrl}/profiles/${profile.name}/bids?_listings=true`, key);
profile.credits = profileList.credits;
save("profile", profile);

function editProfile() {
	const avatarForm = document.getElementById("edit-avatar");
	avatarForm.addEventListener("submit", async (event) => {
		const avatarUrl = document.getElementById("new-avatar");
		event.preventDefault();
		putAvatar(`${baseUrl}/profiles/${profile.name}/media`, avatarUrl.value, key);
		profile.avatar = avatarUrl.value;
		save("profile", profile);
		profileBuild();
	});
}

function switchView() {
	const listingView = document.getElementById("my-listing");
	const bidsView = document.getElementById("my-bids");
	listingView.addEventListener("click", () => {
		listingView.classList.replace("btn-off", "btn-on");
		bidsView.classList.replace("btn-on", "btn-off");
		profileListings(profileList);
	});
	bidsView.addEventListener("click", () => {
		bidsView.classList.replace("btn-off", "btn-on");
		listingView.classList.replace("btn-on", "btn-off");
		profileBids(profileBid);
	});
}

profileBuild();
profileListings(profileList);
editProfile();
switchView();
