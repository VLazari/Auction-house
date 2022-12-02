import { displayList } from "../elements/listing.mjs";
export function searchList(list) {
	const search = document.getElementById("search");
	const searchList = list.map((e) => e);
	search.addEventListener("input", () => {
		const searchResults = searchList.filter((element) => element.title.trim().toLowerCase().includes(search.value.trim().toLowerCase()));
		displayList(searchResults);
	});
}
