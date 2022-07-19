const getUserData = state => state.calculator.userData;
const getFullCalculator = state => state.calculator;
const getLoaderStatus = state => state.calculator.loaderShow;
const getUserInfo = state => state.calculator.userInfo;
const calcSelectors = { getUserData, getFullCalculator, getLoaderStatus,getUserInfo };

export default calcSelectors;
