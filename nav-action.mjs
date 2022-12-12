import { postData } from "/src/js/api/add_listing.mjs";
import { baseUrl, key } from "/src/js/constants.mjs";
import { logoutUser } from "/src/js/auth/auth.mjs";

function addListing() {
	const sellForm = document.getElementById("sell-form");
	const error = document.getElementById("err-add-list");

	sellForm.addEventListener("submit", async (event) => {
		event.preventDefault();
		let mediaImg = [];
		const img = document.querySelectorAll(".product-image");
		img.forEach((image) => {
			if (image.value) mediaImg.push(image.value);
		});

		const body = {
			title: document.getElementById("title").value,
			description: document.getElementById("description").value,
			media: mediaImg,
			date: new Date(document.getElementById("end-date").value),
		};
		const response = postData(`${baseUrl}/listings`, body, key);
		const data = await response;

		if (!data.statusCode) {
			location.reload();
		} else {
			error.classList.replace("d-none", "d-flex");
		}
	});
}
addListing();
logoutUser();
