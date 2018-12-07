import React from 'react';
import Contact from './Contact';

function ContactList(props) {
    const contactList = props.contacts.map((c) => <Contact imageUrl={c.imageUrl} name={c.name} time={c.time} />);
    return (
        <div className="row sideBar">
            {/* <Contact imageUrl="https://placeimg.com/50/50/people" name="Ehimah Obuse" time="17:32 pm" /> */}
            {contactList}
        </div>
    );

}

export default ContactList;