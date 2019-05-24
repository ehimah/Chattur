import React from 'react';
import moment from 'moment'
function Contact(props) {
    const active = props.active ?"active":"";
    return (
        <div className="row sideBar-body" onClick={() => props.roomChanged(props.id)} >
            <div className="col-sm-2 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                    <img src={props.imageUrl} alt="avatar" />
                </div>
            </div>
            <div className="col-sm-10 col-xs-9 sideBar-main" >
                <div className="row">
                    <div className="col-sm-7 col-xs-8 sideBar-name">
                        <span className={"name-meta "+active}>{props.name}</span>
                    </div>
                    <div className="col-sm-5 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">{moment(props.time).calendar()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;