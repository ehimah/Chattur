import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

class TopNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Chattur ;) </a>
                    </Navbar.Brand>

                    {
                        !isAuthenticated() && (
                            <Button
                                id="qsLoginBtn"
                                bsStyle="success"
                                className="btn-margin"
                                onClick={this.login.bind(this)}
                            >
                                Log In
                  </Button>
                        )
                    }
                    {
                        isAuthenticated() && (
                            <Button
                                id="qsLogoutBtn"
                                bsStyle="danger"
                                className="btn-margin"
                                onClick={this.logout.bind(this)}>
                                Log Out
                  </Button>
                        )
                    }
                </Navbar.Header>
            </Navbar>

        );
    }
}

export default TopNavbar