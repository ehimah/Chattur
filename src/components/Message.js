import React from 'react'
import moment from 'moment'

function Message(props){
    return(
        <div className="row message-body">
            <div className="col-sm-12 message-main-receiver">
                <div className="receiver">
                    <div className="message-text">
                       {props.content.text}  </div>
                    <span className="message-time pull-right">
                        {moment(props.content.updatedAt).fromNow()} </span>
                </div>
            </div>
        </div>
    );
}

export default Message