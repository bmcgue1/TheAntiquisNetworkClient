export const CounterActions = {
  ADD: "ADD",
  DEC: "DEC"
};

export function decrement() {
  return {
    type: CounterActions.DEC,
    text: "This is the text from the reducer DEC"
  };
}

export function increment() {
  return {
    type: CounterActions.ADD,
    text: "This is the text from reducer ADD"
  };
}
