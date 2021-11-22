import Lottie from "react-lottie";
import animationData from "./loading.json";

function Loader() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return <Lottie options={defaultOptions} height={400} width={400} />;

	// return (
	// 	<div>Loading</div>
	// )
}

export default Loader;
