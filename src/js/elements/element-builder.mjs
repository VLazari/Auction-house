/**
 * Create an element with it's class
 * @param {string} elementName Type of element to create.
 * @param {string} classNames Elements class names,
 * @returns element with set class names.
 */
export function createElement(elementName, classNames) {
	const element = document.createElement(`${elementName}`);
	element.className = `${classNames}`;
	return element;
}
