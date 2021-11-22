export const __DEV__ =
	!process.env.NODE_ENV || process.env.NODE_ENV === "development";

// export const URL = "https://cardtonic-server-staging-skuow.ondigitalocean.app/v1"
export const URL = __DEV__
	? "https://cardtonic-server-staging-skuow.ondigitalocean.app/v1"
	: "https://api.cardtonic.ng/v1";

export const BASE_URL = `${URL}/`;

export const reactNativeDisableYellowBox = true;
export const showNetworkRequests = false;
export const showNetworkResponses = false;

export const DATE_FORMAT = "d-LL-yyyy";
export const NOTIFICATION_DATE_FORMAT = "d-LL-yyyy|H:mmbbb";
export const MAX_IMAGES = 30;
export const FULL_MONTH_YEAR_DATE_FORMAT = 'MMMM do, y';
export const SHORT_TIME_FORMAT = 'h:mm a';
