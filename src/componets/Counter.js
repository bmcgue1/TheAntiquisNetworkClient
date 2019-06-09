import React, { Component } from "react";
import { increment, decrement } from "../actions/Count";
import { connect } from "react-redux";

class Counter extends Component {
  add = () => {
    this.props.dispatch(increment());
  };

  sub = () => {
    this.props.dispatch(decrement());
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>ADD</button>
        <span>{this.props.count.counterReducer.count}</span>
        <button onClick={this.sub}>SUBTRACT</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state
  };
}

export default connect(mapStateToProps)(Counter);
