import * as loginLogout from "../services/LoginLogoutService";

export const LoginLogoutConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

export const loginLogoutAction = {
  jwtAction: (userName, password) => ({
    type: LoginLogoutConstants.LOGIN,
    jwt: loginLogout.Login(userName, password),
    user: userName
  })
};
