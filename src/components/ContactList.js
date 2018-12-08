import React from 'react';
import Contact from './Contact';

function ContactList(props) {
    const contactList = props.contacts.map((c,index) => <Contact key={index} imageUrl={c.imageUrl} name={c.name} time={c.time} />);
    return (
        <div className="row sideBar">
            {contactList}
        </div>
    );

}

export default ContactList;