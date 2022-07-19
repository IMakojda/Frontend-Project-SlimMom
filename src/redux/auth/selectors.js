const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserAvatar = state => state.auth.user.avatarURL;

const getToken = state => state.auth.token;

const getIsRefresh = state => state.auth.isCurrentUserRefresh;

const loaderShow = state => state.auth.loaderShow;

const getFullUser = state => state.auth.user;

const authSelector = {
  getIsLoggedIn,
  getUserName,
  getUserAvatar,
  getToken,
  getIsRefresh,
  loaderShow,
  getFullUser,
};

export default authSelector;
