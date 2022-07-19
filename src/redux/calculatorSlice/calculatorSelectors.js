const getUserData = state => state.calculator.userData;
const getFullCalculator = state => state.calculator;
const getLoaderStatus = state => state.calculator.loaderShow;

const calcSelectors = { getUserData, getFullCalculator, getLoaderStatus };

export default calcSelectors;
