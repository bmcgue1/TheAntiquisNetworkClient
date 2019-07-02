import React, { Component } from "react";
import { Container } from "reactstrap";
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
