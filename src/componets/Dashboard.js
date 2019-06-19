import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import RedirectionCard from "./RedirectionCard";

class Dashboard extends Component {
  render() {
    return (
      <Container fluid className="userHome">
        <Row>
          <Col xs={{ size: "8", offset: 2 }} className="centerOpacityBase ">
            <Row className="centerContent">
              {" "}
              <div className="userProfilePic" />
            </Row>
            <Row className="centerContent">
              <h2 className="centerContent">
                User: {this.props.user.userReducer.userName}
              </h2>
            </Row>
          </Col>
        </Row>

        <Row className="centerContent">
          {" "}
          <Col xs={{ size: "auto" }}>
            <RedirectionCard page="Network" image="network" />
          </Col>
          <Col xs={{ size: "auto" }}>
            <RedirectionCard page="Network" image="network" />
          </Col>
          <Col xs={{ size: "auto" }}>
            <RedirectionCard page="Network" image="network" />
          </Col>
          <Col xs={{ size: "auto" }}>
            <RedirectionCard page="Network" image="network" />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state
  };
}

export default connect(mapStateToProps)(Dashboard);
