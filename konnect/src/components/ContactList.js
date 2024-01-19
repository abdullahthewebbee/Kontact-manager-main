import React, {useRef} from 'react';
import ContactCard from './ContactCard';

export default function ContactList(props) {
    const inputEl = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact)=> {
        return ( 
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        )
    });
    const getSearchTerm = () => {
        props.searchKeyWord(inputEl.current.value)
    }
    return(
        <div className="ui grid container">
          <div className="row"></div>
          <div className="ui category search">
            <div className="ui icon input">
                <input 
                ref={inputEl}
                className="prompt"
                type="text"
                placeholder="Search contacts..."
                value={props.term}
                onChange={getSearchTerm}
                />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
            </div>
            <div className="row"></div>
            <div className="twelve wide column">
            <h1 className="ui dividing header">Contact List</h1>
            <div className="ui divided list">
            { renderContactList.length > 0 ? renderContactList : "No contacts found!"}
            </div>
            </div>
                <div className="two wide column"></div>
              </div>
    )
    
}
