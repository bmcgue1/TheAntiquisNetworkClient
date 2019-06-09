import { CounterActions } from "../actions/Count";

const initialState = {
  count: 0
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case CounterActions.ADD:
      return {
        count: state.count + 1,
        text: action.text
      };
    case CounterActions.DEC:
      return {
        count: state.count - 1,
        text: action.text
      };

    default:
      return state;
  }
}
