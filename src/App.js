import React from 'react';
import Heading from './components/Heading';

import ContactList from './components/ContactList';
import ConversationHeading from './components/ConversationHeading';
import MessageList from './components/MessageList';
import ReplyBox from "./components/ReplyBox";
import TopNavbar from './components/TopNavbar'

import Chatkit from '@pusher/chatkit'

import { tokenUrl, instanceLocator } from './config'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: Array(10).fill({
        imageUrl: "https://placeimg.com/50/50/people",
        name: "Ehimah Obuse",
        time: "17:59"
      }),
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
      currentUserName: ""
    };

    this.getRooms = this.getRooms.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.switchToRoom = this.switchToRoom.bind(this)
    this.fetchMessages = this.fetchMessages.bind(this)
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
        this.setState({
          currentUserName: currentUser.name
        })
        console.log('current User', currentUser)
        this.getRooms()
      })
      .catch(err => console.log('error on connecting: ', err))
  }

  getRooms() {
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        console.log('joinableRooms =>', joinableRooms);
        console.log('joinedRooms =>', this.currentUser.rooms);
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms: ', err))
  }

  switchToRoom(roomId) {
    // this.setState({ messages: [] })
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onNewMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
          console.log('onNewMessage =>', message)
        },
        onUserStartedTyping: user => {
          /** render out the users */
        }
      }
    })
      .then(room => {
        this.setState({
          roomId: room.id,
          room: room
        })
        this.getRooms()
      })
      .catch(err => console.log('error on subscribing to room: ', err))
  }

  fetchMessages(roomId) {
    this.currentUser.fetchMessages({
      roomId: roomId,
      limit: 50
    })
      .then(messages => {
        this.setState({
          messages: messages,
          roomId: roomId
        })
        console.log("fetched messages for room",roomId,messages)
      })
      .catch(err => console.log("error fetching messages", err))
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <TopNavbar auth={this.props.auth} />
        {
          isAuthenticated() && (
            <div className='container app'>
              <div className='row app-one'>
                <div className="col-sm-4 side">
                  <div className="side-one">
                    <Heading currentUserName={this.state.currentUserName}/>
                    <ContactList roomChanged={this.fetchMessages}
                     contacts={this.state.joinedRooms} activeRoomId={this.state.roomId} />
                  </div>
                </div>

                <div className="col-sm-8 conversation">
                  <ConversationHeading currentUser={this.state.currentUserName}
                  />

                  <MessageList messages={this.state.messages} />
                  <ReplyBox messageSent={this.sendMessage} />
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