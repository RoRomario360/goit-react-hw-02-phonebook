import { Component } from 'react';
import { Form } from './ContactForm/ContactForm';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContactsData = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handlerFilterUsers = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  getSearchContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) => {
      return name.includes(filter);
    });
  };

  handlerDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => id !== contact.id),
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Container title="Phone book">
          <Form addContactsData={this.addContactsData} />
        </Container>
        <Container title="Contacts">
          <Filter
            filterContacts={filter}
            handlerFilterUsers={this.handlerFilterUsers}
          />
          <ContactList
            contactList={this.getSearchContacts()}
            onDelete={this.handlerDelete}
          />
        </Container>
      </div>
    );
  }
}
