import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { loginLogoutAction } from "../actions/LoginLogoutAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isSubmitted: false };

    this.attemptLogin = this.attemptLogin.bind(this);
  }

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  handleChangea = e => {
    this.setState({ password: e.target.value });
  };

  attemptLogin = () => {
    this.props.actions.jwtAction(this.state.username, this.state.password);
  };

  render() {
    return (
      <div>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                id="userName"
                placeholder="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="********"
                onChange={this.handleChangea}
                value={this.state.password}
              />
            </FormGroup>
          </Col>
          <Button
            onClick={this.attemptLogin}
            color="info"
            size="lg"
            className="mspace"
          >
            Login
          </Button>{" "}
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...loginLogoutAction }, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    jwt: state
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
