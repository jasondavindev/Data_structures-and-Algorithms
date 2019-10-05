/**
 * Class to calculate the minimum number of coins for change
 * @param {number} coins
 */
const MinCoinChange = function(coins) {
	this.coins = coins;
	this.cache = {}; // results cache
};

/**
 * @param {number} amount amount to calculate change in coins
 * @return {number[]} array of necessary coins
 */
MinCoinChange.prototype.makeChange = function(amount) {
	if (!amount) {
		return [];
	}

	if (this.cache[amount]) {
		return this.cache[amount];
	}

	let min = [];
	let newMin = [];
	let newAmount;

	for (const coin of this.coins) {
		newAmount = amount - coin;

		if (newAmount >= 0) {
			newMin = this.makeChange(newAmount);

			if (
				(newMin.length < min.length - 1 || !min.length) &&
				(newMin.length || !newAmount)
			) {
				min = [...newMin, coin];
			}
		}
	}

	return (this.cache[amount] = min);
};

const brazilCoins = new MinCoinChange([1, 5, 10, 25, 50]);
brazilCoins.makeChange(36); // [25, 10, 1]
brazilCoins.makeChange(80); // [50, 25, 5]
