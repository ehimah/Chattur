import React from 'react';

function Contact(props) {
    return (
        <div className="row sideBar-body">
            <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                    <img src={props.imageUrl} alt="avatar" />
                </div>
            </div>
            <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                    <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">{props.name}</span>
                    </div>
                    <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">{props.time}</span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;