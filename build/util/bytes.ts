// Partially based on pretty-bytes by sindresorhus
const units = ["b", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];

const bytes = (num: number) => {
	const exponent = Math.min(
		Math.floor(Math.log10(num) / 3),
		units.length - 1
	);

	num /= 1024 ** exponent;
	num = Number(num.toPrecision(2));

	const unit = units[exponent];

	return `${num.toLocaleString()}${unit}`;
};

export default bytes;
