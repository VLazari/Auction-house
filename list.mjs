import { getData } from "./src/js/api/get_listing.mjs";
import { baseUrl, key } from "/src/js/constants.mjs";
import { listingData, listingImg } from "./src/js/elements/listing.mjs";
import { load } from "./src/js/storage/storage.mjs";
import { isLogin } from "./src/js/auth/auth.mjs";
import { placeBid } from "./src/js/api/place_bid.mjs";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const avatar = document.getElementById("sAvatar");

if (!isLogin()) {
	window.location.replace("/index.html");
}

const profile = load("profile");
avatar.src = profile.avatar;
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

const bidBtn = document.getElementById("bid-button");
const bidMessage = document.getElementById("bid-message");

function bidConfirmation() {
	const bidAccept = document.getElementById("accept-bid");
	bidBtn.addEventListener("click", () => {
		const bidAmount = document.getElementById("bid-amount");
		if (parseInt(bidAmount.value) > parseInt(profile.credits)) {
			bidMessage.innerText = `Insufficient funds`;
			bidAccept.classList.add("d-none");
		} else {
			bidAccept.classList.remove("d-none");
			bidMessage.innerText = `Place a ${bidAmount.value} CRD bid`;
			bidAccept.addEventListener("click", async () => {
				const response = await placeBid(`${baseUrl}/listings/${id}/bids`, parseInt(bidAmount.value), key);
				if (response.status === 200) {
					location.reload();
				} else {
					bidMessage.innerText = `Error, please try again`;
					bidAccept.classList.add("d-none");
				}
			});
		}
	});
}
bidConfirmation();

console.log("aaaaaaaaa");
