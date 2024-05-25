const memo: { [key: number]: number } = {};

export function fibonacci(n: number): number {
	if (n === 1 || n === 2) {
		return 1;
	}

	if (memo[n]) {
		return memo[n];
	}

	const result = fibonacci(n - 1) + fibonacci(n - 2);
	memo[n] = result;

	return result;
}
