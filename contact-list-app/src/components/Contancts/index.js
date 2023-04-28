import React,{useState,useEffect} from 'react'
import List from './List';
import Form from './Form';
import './styles.css';

function Contacts() {
    const [contacts,setContacts]=useState([
        {
            fullname:"Ahmet",
            phone_number:"0551 225 2525",
        },
        {
            fullname:"Kasım",
            phone_number:"0531 115 1234",
        },
        {
            fullname:"Barış",
            phone_number:"0541 414 4141",
        },
    ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;