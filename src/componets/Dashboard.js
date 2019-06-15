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

class Dashboard extends Component {
  render() {
    return (
      <Container fluid className="userHome">
        <Row>
          <Col xs={{ size: "8", offset: 2 }} className="centerOpacityBase ">
            <Row className="centerContent">
              <h2 className="centerContent">
                User: {this.props.user.userReducer.userName}
              </h2>
            </Row>
          </Col>
        </Row>
        <Row />
        <Row />
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
