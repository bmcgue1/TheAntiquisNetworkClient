import * as loginActions from "../actions/LoginLogoutAction";

const initialState = {
  jwt: "",
  userId: null,
  userName: "",
  company: ""
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case loginActions.LoginLogoutConstants.LOGIN:
      return {
        jwt: action.jwt,
        userName: action.user
      };
    default:
      return state;
  }
}
