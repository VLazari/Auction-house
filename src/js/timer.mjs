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
