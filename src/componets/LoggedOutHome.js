import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import "../css/style.css";

// import AwesomeSlider from "react-awesome-slider";
// import AwsSliderStyles from "react-awesome-slider/src/styles";

class LoggedOutHome extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isSubmitted: false };
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <h1>
            Temporaliy empty Home page, image drowps down as concent is added.
          </h1>
        </Row>
      </Container>
    );
  }
}

export default LoggedOutHome;
