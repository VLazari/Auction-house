import { createElement } from "/src/js/elements/element-builder.mjs";

export function displayList(data) {
	const container = document.getElementById("listings");
	container.innerHTML = "";
	data.forEach((item) => {
		const divWrap = createElement("a", "item-container border border-secondary rounded p-2 my-5 d-flex flex-column");
		divWrap.href = `/pages/listing.html?id=${item.id}`;
		divWrap.dataset.bsToggle = "modal";
		divWrap.dataset.bsTarget = "#loginModal";
		container.appendChild(divWrap);

		const divImg = createElement("div", "bg-image border border-secondary rounded");
		const img = item.media[0] ? item.media[0] : "/img/Logo.jpg";
		divImg.style.backgroundImage = `url(${img})`;
		divWrap.appendChild(divImg);

		const description = createElement("h6", "my-3 flex-grow-1 d-flex align-items-center");
		description.innerText = item.title;
		divWrap.appendChild(description);

		const borderX = createElement("div", "separator-x col-11 mx-auto my-3 border-secondary");
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

		// const borderY = createElement("div", "separator-y border-secondary my-2");
		// divData.appendChild(borderY);

		const divName = createElement("div", " text-end");
		divData.appendChild(divName);

		const pName = createElement("div", "m-2");
		pName.innerText = "Bider:";
		divName.appendChild(pName);

		const name = createElement("div", "m-2  text-danger fw-bold");
		name.innerText = n === 0 ? "No bids" : item.bids[n - 1].bidderName;
		divName.appendChild(name);

		const border = createElement("div", "separator-x col-11 mx-auto my-3 border-secondary");
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
