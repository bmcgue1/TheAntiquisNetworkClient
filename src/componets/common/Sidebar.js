import React from "react";
import Sidebar from "react-sidebar";
import { Container, Row, Button } from "reactstrap";
import { connect } from "react-redux";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      dash: "loggedInFunc"
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    console.log("we are in");
    this.setState({ sidebarOpen: open });
    if (this.props.user.userReducer.jwt === "") {
      this.setState({ dash: "loggedInFunc" });
    } else {
      this.setState({ dash: "null" });
    }
  }

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
      <Sidebar
        className="side"
        sidebar={
          <Container fluid>
            <Row>
              <Button block outline color="secondary" href="/login" size="lg">
                Credentials
              </Button>
            </Row>
            <Row className={this.state.dash}>
              <Button block outline color="secondary" href="#" size="lg">
                DashBoard
              </Button>
            </Row>
            <Row>
              <Button block outline color="secondary" href="#" size="lg">
                About
              </Button>
            </Row>
            <Row>
              <Button
                block
                outline
                color="secondary"
                onClick={() => this.logout()}
                size="lg"
              >
                Logout
              </Button>
            </Row>
          </Container>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#353940" } }}
      >
        <button
          className="myButton"
          onClick={() => this.onSetSidebarOpen(true)}
        />
      </Sidebar>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state
  };
}

export default connect(mapStateToProps)(SideNav);
