import React, { Component } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Button,
  Input
} from "reactstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="col2">
            <div>
              <Navbar color="dark" dark>
                {" "}
                <Col className="col1" xs="1" />
                <Col className="col3" xs={{ size: "2", offset: 4 }} />
                <Col className="searchbar">
                  <InputGroup size="sm">
                    <Input />
                    <InputGroupAddon addonType="append">
                      <Button color="secondary" size="sm">
                        Search
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Navbar>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
