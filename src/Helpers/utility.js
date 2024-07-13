const returnHour = () => {
	const time = new Date();
	return (
		("0" + time.getHours()).slice(-2) +
		":" +
		("0" + time.getMinutes()).slice(-2) +
		":" +
		("0" + time.getSeconds()).slice(-2)
	);
};

//Example 2018-08-03
const returnDate_ = () => {
	return new Date().toISOString().slice(0, 10);
};

//Example 8/3/2018
const returnDate__ = () => {
	return new Date().toLocaleDateString();
};

const color1 = () => "#121f1d;";

const color2 = () => "#0d5872;";

const color3 = () => "#eea800;";

const color4 = () => "#fff42d;";

const color5 = () => "#fffb87;";

export {
	color1,
	color2,
	color3,
	color4,
	color5,
	returnHour,
	returnDate_,
	returnDate__,
};
