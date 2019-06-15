import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Container,
  Row,
  Col
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
                <Col className="col1" xs="2" />
                <NavbarBrand href="/">The Antiquis Network</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/dash">dash</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/AddTask">Add Task</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Tasks</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Offers</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Bids</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
