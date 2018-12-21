import React from 'react';
import Message from './Message'

function MessageList(props) {
    const messageList = props.messages.map((message, index) =>
        <Message key={message.id} content={message} />
    );
    return (
        <div className="row message" id="conversation">
            <div className="row message-previous">
                <div className="col-sm-12 previous">
                    <a id="ankitjain28" name="20">
                        Show Previous Message!</a>
                </div>
            </div>
            {messageList}
        </div>
    );
}

export default MessageList;