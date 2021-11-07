export function commaFormatter(num = 0, degree = 2) {
	return Number(num)
		.toFixed(degree)
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function balanceFormatter(balance, degree = 2) {
	return String(commaFormatter(balance, degree)).split(".");
}
