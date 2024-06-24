export function rollDice(quantity: number) {
	return Array.from({ length: quantity }, () => {
		let result = Math.floor(Math.random() * 6) + 1;
		return "⚀⚀⚁⚂⚃⚄⚅"[result];
	});
}

export function calculate(x: number, sign: string, y: number) {
	switch (sign) {
		case "+":
			return x + y;
		case "-":
			return x - y;
		case "*":
			return x * y;
		case "/":
			return x / y;
		default:
			throw new Error(`Unknown sign '${sign}'`);
	}
}

export function toBoolean(array: string[]) {
	return array.map((x) => Boolean(x));
}
