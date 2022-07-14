const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserAvatar = state => state.auth.user.avatarURL;

const getToken = state => state.auth.token;

const getIsRefresh = state => state.auth.isCurrentUserRefresh;

const authSelector = {
  getIsLoggedIn,
  getUserName,
  getUserAvatar,
  getToken,
  getIsRefresh,
};

export default authSelector;
