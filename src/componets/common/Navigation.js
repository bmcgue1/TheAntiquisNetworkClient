import React, { Component } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  FormGroup,
  Input,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Nav
} from "reactstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      search: "",
      isOpen: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  logout() {
    localStorage.clear();
    function jwtDelay() {
      window.location.replace("/");
    }

    setTimeout(jwtDelay, 500);
    console.log("logging out ");
  }
  render() {
    return (
      <Container fluid>
        <div>
          <Navbar color="dark" dark>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/login/">Creds</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => this.logout()}>Logout</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Container>
    );
  }
}

export default Navigation;
