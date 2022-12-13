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

export function listingImg(data) {
	const container = document.getElementById("product-img");
	if (data.media) {
		container.innerHTML = "";

		const mainImg = createElement("div", "my-2");
		mainImg.id = "image-main";
		mainImg.style.backgroundImage = `url("${data.media[0]}")`;
		container.appendChild(mainImg);
	}
	if (data.media.length > 1) {
		const altImg = createElement("div", "d-flex justify-content-around p-2");
		container.appendChild(altImg);

		data.media.forEach((img) => {
			const image = createElement("div", "image-preview");
			image.style.cursor = "pointer";
			image.style.backgroundImage = `url("${img})`;
			altImg.appendChild(image);
		});
	}
}

export function listingData(data) {
	const container = document.getElementById("product-data");
	container.innerHTML = "";

	const wrap = createElement("div", "bg-light text-dark");
	container.appendChild(wrap);

	const title = createElement("h1", "m-3");
	title.innerText = data.title;
	wrap.appendChild(title);

	const description = createElement("h3", "m-3");
	description.innerText = data.description;
	wrap.appendChild(description);

	const seller = createElement("p", "mx-3 fst-italic");
	seller.innerText = `Sold by: ${data.seller.name}`;
	wrap.appendChild(seller);

	const time = new Date(data.endsAt) - new Date();
	const n = data.bids.length;
	let style = "";

	const expirDiv = createElement("div", "d-flex align-items-center text-danger mx-3");
	const bidder = createElement("p", "mx-3 mb-0");
	const bidderName = createElement("p", "mx-4 fw-bold");
	bidderName.innerText = n === 0 ? " - " : data.bids[n - 1].bidderName;
	const bidAmount = createElement("span", "fs-5 fw-bold text-danger");
	bidAmount.innerText = n === 0 ? " 0 " : ` ${data.bids[n - 1].amount} CRD`;
	const expir = createElement("h6", "text-center mt-2 text-dark");
	let bidWrap = "";

	if (time < 0) {
		expir.innerText = "Expired on: ";
		bidder.innerText = n === 0 ? "No bids" : "Winning bid: ";
		style = "mx-2 text-danger";
		bidWrap = createElement("div", "d-none");
	} else {
		expir.innerText = "Ends on: ";
		bidder.innerText = n === 0 ? "No bids" : "Highest bid: ";
		style = "mx-2 text-success";
		bidWrap = createElement("div", "d-flex justify-content-center py-3 border m-1");

		const selector = createElement("select", "form-select w-25 mx-3");
		selector.id = "bid-amount";
		bidWrap.appendChild(selector);

		let option = createElement("option", "");
		option.selected = true;
		option.innerText = data.bids[n - 1].amount + 1 + " CDR";
		option.value = data.bids[n - 1].amount + 1;
		selector.appendChild(option);

		option = createElement("option", "");
		option.innerText = data.bids[n - 1].amount + 10 + " CDR";
		option.value = data.bids[n - 1].amount + 10;
		selector.appendChild(option);

		option = createElement("option", "");
		option.innerText = data.bids[n - 1].amount + 50 + " CDR";
		option.value = data.bids[n - 1].amount + 50;
		selector.appendChild(option);

		option = createElement("option", "");
		option.innerText = data.bids[n - 1].amount + 100 + " CDR";
		option.value = data.bids[n - 1].amount + 100;
		selector.appendChild(option);

		const bidBtn = createElement("button", "btn btn-danger text-light px-5");
		bidBtn.type = "button";
		bidBtn.innerText = "Place bid";
		bidWrap.appendChild(bidBtn);
	}

	wrap.appendChild(bidder);
	wrap.appendChild(bidderName);
	bidderName.appendChild(bidAmount);
	wrap.appendChild(expirDiv);
	expirDiv.appendChild(expir);

	const date = createElement("span", style);
	date.innerText = new Date(data.endsAt).toLocaleString();
	expirDiv.appendChild(date);

	wrap.appendChild(bidWrap);

	const bidders = createElement("div", "p-3 my-3 border");
	container.appendChild(bidders);

	const allBids = createElement("h4", "text-center");
	if (n === 0) {
		allBids.innerText = "No bids were made";
	} else {
		allBids.innerText = "All bids:";
		data.bids.forEach((bid) => {
			const biddersName = createElement("p", "text-start fs-6");
			biddersName.innerText = ` - ${bid.bidderName} : ${bid.amount} CRD`;
			allBids.appendChild(biddersName);
		});
	}
	bidders.appendChild(allBids);
}
