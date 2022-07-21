export default function ContactList({ contactList }) {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Phone: {number}</p>
          </li>
        );
      })}
    </ul>
  );
}
