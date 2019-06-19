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
import "../css/style.css";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isSubmitted: false };

    this.register = this.register.bind(this);
  }

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  handleChangea = e => {
    this.setState({ password: e.target.value });
  };

  register = () => {
    console.log("hi");
    axios
      .post(
        `http://antiquisnetwork-env.spkqqnhv3w.us-east-1.elasticbeanstalk.com/users/sign-up`,
        {
          username: this.state.username,
          password: this.state.password
        }
      )
      .catch(function(error) {
        console.log(error.status);
      });

    function jwtDelay() {
      window.location.replace("/login");
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
              <div className="registerImage" />
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
                onClick={this.register}
                color="info"
                size="lg"
                className="mspace"
              >
                Sign Up
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

export default Register;
