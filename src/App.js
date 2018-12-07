import React from 'react';
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';

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
    }
  }

  render() {
    return (
      <div className='container app'>
        <div className='row app-one'>
          <div className="col-sm-4 side">
            <div className="side-one">
              <Heading />
              <SearchBox />
              <ContactList contacts={this.state.contacts} />
            </div>
            <div className="side-two">

              {/* <!-- Heading --> */}
              <div className="row newMessage-heading">
                <div className="row newMessage-main">
                  <div className="col-sm-2 col-xs-2 newMessage-back">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                  </div>
                  <div className="col-sm-10 col-xs-10 newMessage-title">
                    New Chat
              </div>
                </div>
              </div>
              {/* <!-- Heading End --> */}

              {/* <!-- ComposeBox --> */}
              <div className="row composeBox">
                <div className="col-sm-12 composeBox-inner">
                  <div className="form-group has-feedback">
                    <input id="composeText" type="text" className="form-control" name="searchText" placeholder="Search People" />
                    <span className="glyphicon glyphicon-search form-control-feedback"></span>
                  </div>
                </div>
              </div>
              {/* <!-- ComposeBox End --> */}

              {/* <!-- sideBar --> */}
              <div className="row compose-sideBar">
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://placeimg.com/50/50/people" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">Ankit Jain
                  </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                  </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://placeimg.com/50/50/people" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">Ankit Jain
                  </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://placeimg.com/50/50/people" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">Ankit Jain
                  </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://placeimg.com/50/50/people" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">Ankit Jain
                  </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://placeimg.com/50/50/people" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">Ankit Jain
                  </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://placeimg.com/50/50/people" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">Ankit Jain
                  </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://placeimg.com/50/50/people" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">Ankit Jain
                  </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://placeimg.com/50/50/people" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">Ankit Jain
                  </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://placeimg.com/50/50/people" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">Ankit Jain
                  </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src="https://placeimg.com/50/50/people" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">Ankit Jain
                  </span>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">18:18
                  </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Sidebar End --> */}
          </div>


          {/* <!-- New Message Sidebar End --> */}

          {/* <!-- Conversation Start --> */}
          <div className="col-sm-8 conversation">
            {/* <!-- Heading --> */}
            <div className="row heading">
              <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div className="heading-avatar-icon">
                  <img src="https://placeimg.com/50/50/people" />
                </div>
              </div>
              <div className="col-sm-8 col-xs-7 heading-name">
                <a className="heading-name-meta">Ankit Jain
            </a>
                <span className="heading-online">Online</span>
              </div>
              <div className="col-sm-1 col-xs-1  heading-dot pull-right">
                <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
              </div>
            </div>
            {/* <!-- Heading End --> */}

            {/* <!-- Message Box --> */}
            <div className="row message" id="conversation">

              <div className="row message-previous">
                <div className="col-sm-12 previous">
                  <a id="ankitjain28" name="20">
                    Show Previous Message!
              </a>
                </div>
              </div>

              <div className="row message-body">
                <div className="col-sm-12 message-main-receiver">
                  <div className="receiver">
                    <div className="message-text">
                      Hyy, Its Awesome..!
                </div>
                    <span className="message-time pull-right">
                      Sun
                </span>
                  </div>
                </div>
              </div>

              <div className="row message-body">
                <div className="col-sm-12 message-main-sender">
                  <div className="sender">
                    <div className="message-text">
                      Thanks n I know its awesome...!
                </div>
                    <span className="message-time pull-right">
                      Sun
                </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Message Box End --> */}

            {/* <!-- Reply Box --> */}
            <div className="row reply">
              <div className="col-sm-1 col-xs-1 reply-emojis">
                <i className="fa fa-smile-o fa-2x"></i>
              </div>
              <div className="col-sm-9 col-xs-9 reply-main">
                <textarea className="form-control" rows="1" id="comment"></textarea>
              </div>
              <div className="col-sm-1 col-xs-1 reply-recording">
                <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
              </div>
              <div className="col-sm-1 col-xs-1 reply-send">
                <i className="fa fa-send fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            {/* <!-- Reply Box End --> */}
          </div>
          {/* <!-- Conversation End --> */}
        </div>
      </div>
    );
  }
}

export default App