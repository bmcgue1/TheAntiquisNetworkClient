import * as loginActions from "../actions/LoginLogoutAction";

const initialState = {
  jwt: "",
  userName: "",
  company: ""
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case loginActions.LoginLogoutConstants.LOGIN:
      return {
        jwt: action.payload,
        userName: action.username
      };
    default:
      return state;
  }
}
