/**
 * Iteration binary search
 * @param {number[]} array should be a sorted numbers array
 * @param {number} value number to search
 * @returns {number} index or -1 if not found
 */
function binarySearch(array, value) {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		const middle = parseInt((start + end) / 2); // needs parse to int

		if (array[middle] == value) {
			return middle;
		}

		if (array[middle] < value) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}

	return -1;
}

const array = [20, 15, 2, -100, 200, 88, 56, 7, 1];
array.sort((a, b) => a - b); // custom function for sorting (javascript's magics)

console.log(binarySearch(array, 88)); // 7
console.log(binarySearch(array, 5)); // -1
