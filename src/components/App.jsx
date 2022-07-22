import { Component } from 'react';
import { Form } from './ContactForm/ContactForm';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
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
