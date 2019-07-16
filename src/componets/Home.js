import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import LoggedOutHome from "./LoggedOutHome";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isSubmitted: false };
  }

  render() {
    return (
      <Container fluid>
        <div className="userHome" />
        <LoggedOutHome />
      </Container>
    );
  }
}

export default Home;
