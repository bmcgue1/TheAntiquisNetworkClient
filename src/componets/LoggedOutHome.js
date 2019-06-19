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

class LoggedOutHome extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isSubmitted: false };
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <h1>Home Page Component</h1>
        </Row>
      </Container>
    );
  }
}

export default LoggedOutHome;
