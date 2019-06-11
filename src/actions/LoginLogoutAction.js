import axios from "axios";

export const LoginLogoutConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

export function loginLogoutAction(user, pass) {
  const request = axios.post(
    "http://antiquisnetwork-env.spkqqnhv3w.us-east-1.elasticbeanstalk.com/login",
    {
      username: user,
      password: pass
    }
  );

  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: LoginLogoutConstants.LOGIN,
        payload: data,
        username: user
      });
    });
  };
}
