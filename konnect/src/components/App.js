import React, {useState, useEffect} from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactDetails from './ContactDetails';
import UpdateContact from './UpdateContact';
import api from './api/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const LOCAL_STORAGE_KEY = 'contacts';

  // Retrive Contacts From Axios Api
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }
  const addContactHandler = async (contact) => {
    
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post('/contacts', request);
    console.log(response)
    setContacts([...contacts, response.data]);
    // setContacts([...contacts, {id:uuid(), ...contact}]);
  }
  
  const updateContactHandler = async (contact) => {
    const response = await api.put('contacts/'+contact.id, contact);
    const {id, name, email} = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data }: contact;
      })
    );
  }
  const removeContactHandler = async (id) => {
    await api.delete('contacts/'+id)
    const newContactList = contacts.filter((contact)=> {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join("").toLowerCase().includes(searchTerm.toLowerCase())
      });
      setSearchResults(newContactList);
    }
    else{
      setSearchResults(contacts);
    }
    
  }

  useEffect(() =>{
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)))
    // if(retriveContacts){
    //   setContacts(retriveContacts);
    // }
    const getAllContacts = async () => {
      const allContacts  = await retriveContacts();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
  },[])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])

  return (
    <div className="App">
      
        <Router>
        <Header />
          <Switch>
          <Route path="/add" exact render={(props) => <AddContact {...props} addContactHandler={addContactHandler} />} />
          <Route path="/" exact render={(props) => <ContactList {...props} contacts={searchTerm.length < 1 ? contacts : searchResults} getContactId={removeContactHandler} term={searchTerm} searchKeyWord={searchHandler} />} />
          <Route path="/contact/:id" exact render={(props) => <ContactDetails {...props}  />} />
          <Route path="/edit/:id" exact render={(props) => <UpdateContact {...props} updateContactHandler={updateContactHandler}  />} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
