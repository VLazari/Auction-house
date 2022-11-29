/**
 * Save item to local storage
 * @param {string} key item name
 * @param {string} value item value
 */
export const save = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Returns the value of the given item or null
 * @param {string} key item name
 * @returns item value or null if it doesn't exist
 */
export const load = (key) => {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch {
		return null;
	}
};
/**
 * Remove given item from local storage
 * @param {string} key item name
 */
export const remove = (key) => localStorage.removeItem(key);

/**
 * Clear all data from local storage
 */
export const clear = () => localStorage.clear();
