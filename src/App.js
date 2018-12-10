import React from 'react';
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';
import ConversationHeading from './components/ConversationHeading';
import MessageList from './components/MessageList';
import ReplyBox from "./components/ReplyBox";
import { Navbar, Button } from 'react-bootstrap';
import Chatkit from '@pusher/chatkit'

import { tokenUrl, instanceLocator } from './config'

import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: Array(10).fill({
        imageUrl: "https://placeimg.com/50/50/people",
        name: "Ehimah Obuse",
        time: "17:59"
      })
    };

    this.getRooms = this.getRooms.bind(this)
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  componentDidMount() {

    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }

    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'ehimah',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })
    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        console.log(this.currentUser.rooms[3].userIds)
        this.getRooms()
      })
      .catch(err => console.log('error on connecting: ', err))
  }

  getRooms() {
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms: ', err))
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
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
                  bsStyle="error"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                  </Button>
              )
            }
          </Navbar.Header>
        </Navbar>
        {
          isAuthenticated() && (
            <div className='container app'>
              <div className='row app-one'>
                <div className="col-sm-4 side">
                  <div className="side-one">
                    <Heading />
                    <SearchBox />
                    <ContactList contacts={this.state.contacts} />
                  </div>
                </div>

                <div className="col-sm-8 conversation">
                  <ConversationHeading
                    name={"Abraham Ogbumah"}
                    status={"Online"}
                    imageUrl="https://placeimg.com/50/50/people" />

                  <MessageList />
                  <ReplyBox />
                </div>
                {/* <!-- Conversation End --> */}
              </div>
            </div>

          )
        }
      </div>

    );
  }
}

export default App