const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getToken = state => state.auth.token;

const getIsRefresh = state => state.auth.isCurrentUserRefresh

const authSelector = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getIsRefresh
}

export default authSelector;
