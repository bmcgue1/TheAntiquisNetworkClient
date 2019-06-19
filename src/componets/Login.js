import React, { Component } from "react";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row
} from "reactstrap";
import { connect } from "react-redux";
import { login } from "../actions/LoginLogoutAction";
import "../css/style.css";
import Counter from "../componets/Counter";

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
    this.props.dispatch(login(this.state.username, this.state.password));
    function jwtDelay() {
      window.location.replace("/dash");
    }

    setTimeout(jwtDelay, 500);
  };

  render() {
    return (
      <Container fluid className="userHome">
        <Row>
          <Col xs={{ size: "8", offset: 2 }} className="centerOpacityBase ">
            <Row className="centerContent">
              {" "}
              <div className="sighnUpImage" />
            </Row>
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
          </Col>
        </Row>
        <Row id="extrarow" />
        <Row />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    jwt: state
  };
}

export default connect(mapStateToProps)(Login);
