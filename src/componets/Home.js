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
import LoggedOutHome from "./LoggedOutHome";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isSubmitted: false };
  }

  render() {
    return (
      <Container fluid className="userHome">
        <LoggedOutHome />
      </Container>
    );
  }
}

export default Home;
