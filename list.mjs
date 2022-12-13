import { getData } from "./src/js/api/get_listing.mjs";
import { baseUrl, key } from "/src/js/constants.mjs";
import { listingData, listingImg } from "./src/js/elements/listing.mjs";
import { load } from "./src/js/storage/storage.mjs";
import { isLogin } from "./src/js/auth/auth.mjs";
import { placeBid } from "./src/js/api/place_bid.mjs";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

if (!isLogin()) {
	window.location.replace("/index.html");
}

const profile = load("profile");
const listing = await getData(`${baseUrl}/listings/${id}?_seller=true&_bids=true`, key);

listingImg(listing);
listingData(listing);

const images = document.querySelectorAll(".image-preview");
const mainImg = document.getElementById("image-main");

images.forEach((img) => {
	img.addEventListener("click", () => {
		mainImg.style.backgroundImage = img.style.backgroundImage;
	});
});

// console.log(listing);
