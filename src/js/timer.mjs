export function countdown(date, days, hours, minutes, seconds) {
	const endDate = new Date(date);
	const currentDate = new Date().getTime();
	const timeLength = endDate - currentDate;

	const sec = 1000;
	const min = sec * 60;
	const hour = min * 60;
	const day = hour * 24;

	days.innerText = `${Math.floor(timeLength / day)} D`;
	hours.innerText = `${Math.floor((timeLength % day) / hour)} H`;
	minutes.innerText = `${Math.floor((timeLength % hour) / min)} M`;
	seconds.innerText = `${Math.floor((timeLength % min) / sec)} S`;
}

export function exclExpired(allListings) {
	const newListings = allListings.map((e) => e);
	for (let i = 0; i < newListings.length; i++) {
		const endDate = new Date(newListings[i].endsAt);
		const currentDate = new Date().getTime();
		const time = endDate - currentDate;
		if (time < 1000) {
			newListings.splice(i, 1);
			i--;
		}
	}
	return newListings;
}
