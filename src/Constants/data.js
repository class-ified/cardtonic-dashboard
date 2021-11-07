
// import GiftCard from '../assets/svgs/giftCard.svg';
// import Home from '../assets/svgs/home.svg';
// import RateCalculator from '../assets/svgs/rateCalculator.svg';
// import AccountDetails from '../assets/svgs/accountDetails.svg';
// import Withdrawals from '../assets/svgs/withdrawals.svg';
// import Faq from '../assets/svgs/faq.svg';
// import Notifications from '../assets/svgs/notifications.svg';
// import Chat from '../assets/svgs/chatWithUs.svg';

const authInitialState = {
  loggedIn: true,
  authenticated: false,
};

const serverSettings = {
  minimumAmountWithdrawables: {
    NGN: 0,
  },
  enableWithdrawals: {
    NGNWithdrawal: true,
  },
  paymentApi: {
    redbiller: true,
    paystack: true,
  },
  walletText: '',
  enableTrade: true,
  giftCardInstruction: '',
  homepageAvatars: [],
  approveWithoutPaymentAPI: true,
};

const userInitialState = {
  wallets: [],
  _id: null,
  avatar: null,
  tagged: false,
  isVerified: false,
  note: '',
  freeze: false,
  passwordResetToken: '',
  phoneNumber: '',
  username: '',
  fcmTokens: [],
  suspended: false,
  name: undefined,
  email: '',
  role: '',
  country: '',
  createdAt: '',
  updatedAt: '',
  lastLogin: '',
  pinCode: false,
  id: '',
};
const banks = [
  {label: 'Abbey Mortgage Bank', value: '801'},
  {label: 'Access Bank', value: '044'},
  {label: 'Access Bank (Diamond)', value: '063'},
  {label: 'ALAT by WEMA', value: '035A'},
  {label: 'ASO Savings and Loans', value: '401'},
  {label: 'Bowen Microfinance Bank', value: '50931'},
  {label: 'CEMCS Microfinance Bank', value: '50823'},
  {label: 'Citibank Nigeria', value: '023'},
  {label: 'Coronation Merchant Bank', value: '559'},
  {label: 'Ecobank Nigeria', value: '050'},
  {label: 'Ekondo Microfinance Bank', value: '562'},
  {label: 'Eyowo', value: '50126'},
  {label: 'Fidelity Bank', value: '070'},
  {label: 'First Bank of Nigeria', value: '011'},
  {label: 'First City Monument Bank', value: '214'},
  {label: 'FSDH Merchant Bank Limited', value: '501'},
  {label: 'Globus Bank', value: '00103'},
  {label: 'Guaranty Trust Bank', value: '058'},
  {label: 'Hackman Microfinance Bank', value: '51251'},
  {label: 'Hasal Microfinance Bank', value: '50383'},
  {label: 'Heritage Bank', value: '030'},
  {label: 'Ibile Microfinance Bank', value: '51244'},
  {label: 'Infinity MFB', value: '50457'},
  {label: 'Jaiz Bank', value: '301'},
  {label: 'Keystone Bank', value: '082'},
  {label: 'Kuda Bank', value: '50211'},
  {label: 'Lagos Building Investment Company Plc.', value: '90052'},
  {label: 'Mayfair MFB', value: '50563'},
  {label: 'One Finance', value: '565'},
  {label: 'PalmPay', value: '999991'},
  {label: 'Parallex Bank', value: '526'},
  {label: 'Parkway - ReadyCash', value: '311'},
  {label: 'Paycom', value: '999992'},
  {label: 'Petra Mircofinance Bank Plc', value: '50746'},
  {label: 'Polaris Bank', value: '076'},
  {label: 'Providus Bank', value: '101'},
  {label: 'Rand Merchant Bank', value: '502'},
  {label: 'Rubies MFB', value: '125'},
  {label: 'Sparkle Microfinance Bank', value: '51310'},
  {label: 'Stanbic IBTC Bank', value: '221'},
  {label: 'Standard Chartered Bank', value: '068'},
  {label: 'Sterling Bank', value: '232'},
  {label: 'Suntrust Bank', value: '100'},
  {label: 'TAJ Bank', value: '302'},
  {label: 'TCF MFB', value: '51211'},
  {label: 'Titan Bank', value: '102'},
  {label: 'Union Bank of Nigeria', value: '032'},
  {label: 'United Bank For Africa', value: '033'},
  {label: 'Unity Bank', value: '215'},
  {label: 'VFD Microfinance Bank Limited', value: '566'},
  {label: 'Wema Bank', value: '035'},
  {label: 'Zenith Bank', value: '057'},
];


// const menuData = [
//   {
//     OnboardImage: Home,
//     menuTitle: 'Dashboard',
//     screen: 'Home',
//   },
//   {
//     OnboardImage: GiftCard,
//     menuTitle: 'Gift Card History',
//     screen: 'TransactionHistory',
//   },
//   {
//     OnboardImage: RateCalculator,
//     menuTitle: 'Rate Calculator',
//     screen: 'Rate Calculator',
//   },
//   {
//     OnboardImage: AccountDetails,
//     menuTitle: 'Account Details',
//     screen: 'AccountDetails',
//   },
//   {
//     OnboardImage: Withdrawals,
//     menuTitle: 'Withdrawals',
//     screen: 'Withdrawals',
//   },
//   {
//     OnboardImage: Faq,
//     menuTitle: 'FAQs',
//     screen: 'Faqs',
//   },
//   {
//     OnboardImage: Notifications,
//     menuTitle: 'Notifications',
//     screen: 'Notification',
//   },
//   {
//     OnboardImage: Chat,
//     menuTitle: 'Chat with Us',
//   },
// ];

const miscInitialState = {
  bio: true,
  rates: {},
  banks: banks,
  bankMap: {},
  balanceHidden: false,
  cardSubCategories: [],
  onboarded: false,
  serverState: {},
  usersBank: [],
};

export default {
  authInitialState,
  userInitialState,
  banks,
  miscInitialState,
  // menuData,
  cardCategoryRates: {
    label: 'Select Category',
    value: 'Select Category',
  },
  cardSub: {
    label: 'Select Sub-Category',
    value: 'Select Sub-Category',
  },
  bankName: {
    label: 'Bank Name',
    value: 'Bank Name',
  },
  serverSettings,
};
