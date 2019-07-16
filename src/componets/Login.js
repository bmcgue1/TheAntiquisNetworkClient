import React, { Component } from "react";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";
import { connect } from "react-redux";
import { login } from "../actions/LoginLogoutAction";
import axios from "axios";
import "../css/style.css";
import "react-awesome-slider/dist/styles.css";

//import Counter from "../componets/Counter";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginModal: false,
      registerModal: false,
      isSubmitted: false
    };
    this.loginToggle = this.loginToggle.bind(this);
    this.registerToggle = this.registerToggle.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
    this.register = this.register.bind(this);
  }

  //toggle for each Modal
  loginToggle() {
    this.setState(prevState => ({ loginModal: !prevState.loginModal }));
  }

  registerToggle() {
    this.setState(prevState => ({ registerModal: !prevState.registerModal }));
  }

  //Handle Feild Changes
  handleChangeLoginUserName = e => {
    this.setState({ username: e.target.value });
  };

  handleChangeLoginPassword = e => {
    this.setState({ password: e.target.value });
  };
  handleChnageRegisterUserName = e => {
    this.setState({ username: e.target.value });
  };

  handleChangeRegisterPassword = e => {
    this.setState({ password: e.target.value });
  };

  // Logign

  attemptLogin = () => {
    this.props.dispatch(login(this.state.username, this.state.password));
    function jwtDelay() {
      window.location.replace("/dash");
    }

    setTimeout(jwtDelay, 500);
  };

  // Register

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
          {/* Login Modal */}
          <Modal isOpen={this.state.loginModal} toggle={this.loginToggle}>
            <ModalHeader toggle={this.loginToggle}>LOGIN</ModalHeader>
            <ModalBody>
              <Form className="form">
                <Col>
                  <FormGroup>
                    <Label>Username</Label>
                    <Input
                      type="text"
                      name="username"
                      id="userName"
                      placeholder="username"
                      onChange={this.handleChangeLoginUserName}
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
                      onChange={this.handleChangeLoginPassword}
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
            </ModalBody>
          </Modal>

          {/* Register Modal */}

          <Modal isOpen={this.state.registerModal} toggle={this.registerToggle}>
            <ModalHeader toggle={this.registerToggle}>REGISTER</ModalHeader>
            <ModalBody>
              <Form className="form">
                <Col>
                  <FormGroup>
                    <Label>Username</Label>
                    <Input
                      type="text"
                      name="username"
                      id="userName"
                      placeholder="username"
                      onChange={this.handleChnageRegisterUserName}
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
                      onChange={this.handleChangeRegisterPassword}
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
            </ModalBody>
          </Modal>
          <Col xs={{ size: "8", offset: 2 }} className="centerOpacityBase ">
            <Row className="centerContent"> </Row>

            <Row>
              <Col className="marg" />
              <Col className="largeLogo" />
              <Col />
            </Row>
            <Row>
              <Col />
              <Col>
                <Button color="danger" onClick={this.loginToggle}>
                  Login
                </Button>
              </Col>
              <Col>
                <Button color="danger" onClick={this.registerToggle}>
                  Register
                </Button>
              </Col>
              <Col />
            </Row>
            <Row>
              <Col className="marg" />
              <Col className="marg">
                {" "}
                <Form>
                  <FormGroup>
                    <Input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="search for company"
                      onChange={this.handleSearch}
                      value={this.state.search}
                    />
                  </FormGroup>
                </Form>
              </Col>
              <Col />
            </Row>
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
