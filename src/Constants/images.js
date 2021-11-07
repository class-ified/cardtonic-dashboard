const images = {
	logo: require("../assets/images/logo.png"),
	darkLogo: require("../assets/images/darklogo.png"),
	dummyUser: require("../assets/images/dummyuser.png"),
	upload: require("../assets/images/upload.png"),
	teeth: require("../assets/images/teeth.png"),
	receipt: require("../assets/images/Receipt.png"),
	onboarding1: require("../assets/images/onboarding1.png"),
	onboarding2: require("../assets/images/onboarding1.png"),
	onboarding3: require("../assets/images/onboarding1.png"),
	newsletter: require("../assets/images/newsletter.png"),
};

const toArray = () => {
	let keys = Object.keys(images);
	return keys.map((key) => images[key]);
};
export default {
	...images,
	toArray,
};
