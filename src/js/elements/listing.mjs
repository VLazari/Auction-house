import { createElement } from "/src/js/elements/element-builder.mjs";
import { load } from "../storage/storage.mjs";

export function displayList(data) {
	const container = document.getElementById("listings");
	container.innerHTML = "";
	data.forEach((item) => {
		const divWrap = createElement("a", "item-container border border-dark rounded p-2 my-5 d-flex flex-column bg-secondary text-dark");
		divWrap.href = `/pages/listing.html?id=${item.id}`;
		divWrap.dataset.bsToggle = "modal";
		divWrap.dataset.bsTarget = "#loginModal";
		container.appendChild(divWrap);

		const divImg = createElement("div", "bg-image bg-dark rounded");
		const img = item.media[0] ? item.media[0] : "/img/Logo.jpg";
		divImg.style.backgroundImage = `url(${img})`;
		divWrap.appendChild(divImg);

		const description = createElement("h6", "my-3 flex-grow-1 d-flex align-items-center");
		description.innerText = item.title;
		divWrap.appendChild(description);

		const borderX = createElement("div", "separator-x col-11 mx-auto my-3 border-dark");
		divWrap.appendChild(borderX);

		const divData = createElement("div", "d-flex justify-content-between");
		divWrap.appendChild(divData);

		const divBid = createElement("div", "");
		divData.appendChild(divBid);

		const bidPrice = createElement("p", "m-2");
		bidPrice.innerText = "Last bid:";
		divBid.appendChild(bidPrice);

		const price = createElement("p", "m-2 text-danger fw-bold");
		const n = item.bids.length;
		const amount = n === 0 ? 0 : item.bids[n - 1].amount;
		price.innerText = `CRD: ${amount}`;
		divBid.appendChild(price);

		const divName = createElement("div", " text-end");
		divData.appendChild(divName);

		const pName = createElement("div", "m-2");
		pName.innerText = "Bider:";
		divName.appendChild(pName);

		const name = createElement("div", "m-2  text-danger fw-bold");
		name.innerText = n === 0 ? "No bids" : item.bids[n - 1].bidderName;
		divName.appendChild(name);

		const border = createElement("div", "separator-x col-11 mx-auto my-3 border-dark");
		divWrap.appendChild(border);

		const timeText = createElement("h6", "text-center mt-2");
		timeText.innerText = "Ends in:";
		divWrap.appendChild(timeText);

		const divTimer = createElement("div", "timer d-flex justify-content-around text-danger p-2");
		divTimer.dataset.expDate = item.endsAt;
		divWrap.appendChild(divTimer);

		const days = createElement("span", "");
		divTimer.appendChild(days);

		const separator1 = createElement("span", "");
		separator1.innerText = ":";
		divTimer.appendChild(separator1);

		const hours = createElement("span", "");
		divTimer.appendChild(hours);

		const separator2 = createElement("span", "");
		separator2.innerText = ":";
		divTimer.appendChild(separator2);

		const minutes = createElement("span", "");
		divTimer.appendChild(minutes);

		const separator3 = createElement("span", "");
		separator3.innerText = ":";
		divTimer.appendChild(separator3);

		const seconds = createElement("span", "");
		divTimer.appendChild(seconds);
	});
}

export function profileListings(data) {
	const container = document.getElementById("profile-listings");
	container.innerHTML = `<div class="container-fluid d-flex border border-dark rounded p-2 my-2">
	<h3 class="mx-auto py-5">You don't have any listings</h3>            
</div>`;
	if (data.listings.length) container.innerHTML = "";
	data.listings.forEach((item) => {
		const wrap = createElement("a", "container-fluid d-flex border border-dark rounded p-2 my-2");
		wrap.href = `/pages/listing.html?id=${item.id}`;
		container.appendChild(wrap);

		const divImg = createElement("div", "bg-image border rounded");
		const img = item.media[0] ? item.media[0] : "/img/Logo.jpg";
		divImg.style.backgroundImage = `url(${img})`;
		wrap.appendChild(divImg);

		const description = createElement("div", "m-2 mx-5 text-dark");
		wrap.appendChild(description);

		const title = createElement("h5", "my-3");
		title.innerText = item.title;
		description.appendChild(title);

		const describe = createElement("p", "");
		describe.innerText = item.description;
		description.appendChild(describe);

		const expirDiv = createElement("div", "d-flex align-items-center text-danger");
		description.appendChild(expirDiv);

		const time = new Date(item.endsAt) - new Date();
		let style = "";
		const expir = createElement("h6", "text-center mt-2 text-dark");
		if (time < 0) {
			expir.innerText = "Expired on: ";
			style = "mx-2 text-danger";
		} else {
			expir.innerText = "Ends on: ";
			style = "mx-2 text-success";
		}
		expirDiv.appendChild(expir);

		const date = createElement("span", style);
		date.innerText = new Date(item.endsAt).toLocaleString();
		expirDiv.appendChild(date);
	});
}

export function profileBids(data) {
	const container = document.getElementById("profile-listings");
	container.innerHTML = `<div class="container-fluid d-flex border border-dark rounded p-2 my-2">
	<h3 class="mx-auto py-5">You don't have any bids</h3>            
</div>`;
	if (data.length) container.innerHTML = "";
	data.forEach((item) => {
		const wrap = createElement("a", "container-fluid d-flex border border-dark rounded p-2 my-2");
		wrap.href = `/pages/listing.html?id=${item.id}`;
		container.appendChild(wrap);

		const divImg = createElement("div", "bg-image border rounded");
		const img = item.listing.media[0] ? item.listing.media[0] : "/img/Logo.jpg";
		divImg.style.backgroundImage = `url(${img})`;
		wrap.appendChild(divImg);

		const description = createElement("div", "m-2 mx-5 text-dark");
		wrap.appendChild(description);

		const title = createElement("h5", "my-3");
		title.innerText = item.listing.title;
		description.appendChild(title);

		const describe = createElement("p", "");
		describe.innerText = item.listing.description;
		description.appendChild(describe);

		const expirDiv = createElement("div", "d-flex align-items-center text-danger");
		description.appendChild(expirDiv);

		const bid = createElement("p", "");
		bid.innerText = `${it.listing.bidderName} : ${item.listing.amount} CRD`;
		description.appendChild(bid);

		const time = new Date(item.listing.endsAt) - new Date();
		let style = "";
		const expir = createElement("h6", "text-center mt-2 text-dark");
		if (time < 0) {
			expir.innerText = "Expired on: ";
			style = "mx-2 text-danger";
		} else {
			expir.innerText = "Ends on: ";
			style = "mx-2 text-success";
		}
		expirDiv.appendChild(expir);

		const date = createElement("span", style);
		date.innerText = new Date(item.listing.endsAt).toLocaleString();
		expirDiv.appendChild(date);
	});
}

export function profileBuild() {
	const main = document.getElementById("personal");
	main.innerHTML = "";
	const profile = load("profile");

	const wrap = createElement("div", "d-flex flex-column align-items-center p-2");
	main.appendChild(wrap);

	const image = createElement("div", "rounded-circle border border-dark border-2");
	image.id = "avatarImg";
	image.style.backgroundImage = `url("${profile.avatar}")`;
	wrap.appendChild(image);

	const name = createElement("h4", "mt-3");
	name.innerText = profile.name;
	wrap.appendChild(name);

	const email = createElement("p", "mb-1");
	email.innerText = profile.email;
	wrap.appendChild(email);

	const balance = createElement("p", "m-1 mb-5 fw-bold");
	balance.innerText = "Balance: ";
	wrap.appendChild(balance);

	const amount = createElement("span", "balance text-success");
	amount.innerText = `${profile.credits} CRD`;
	balance.appendChild(amount);

	const form = createElement("form", "d-flex flex-column border border-dark p-3");
	form.id = "edit-avatar";
	wrap.appendChild(form);

	const newAvatar = createElement("input", "form-control");
	newAvatar.id = "new-avatar";
	newAvatar.placeholder = "New avatar URL";
	newAvatar.required = true;
	newAvatar.type = "text";
	form.appendChild(newAvatar);

	const button = createElement("button", "btn btn-primary  m-3");
	button.type = "submit";
	button.innerText = "Edit avatar";
	form.appendChild(button);
}
