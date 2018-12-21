import React from 'react';
import Contact from './Contact';
import SearchBox from './SearchBox';

function ContactList(props) {
    const contactList = props.contacts.map((room) =>
     <Contact id={room.id} key={room.id} 
     imageUrl="https://placeimg.com/50/50/people" 
     name={room.name} 
     time={room.time} roomChanged={props.roomChanged} active={props.activeRoomId == room.id}/>);
    return (
        <div className="row sideBar">
            <SearchBox />
            {contactList}
        </div>
    );
}

export default ContactList;