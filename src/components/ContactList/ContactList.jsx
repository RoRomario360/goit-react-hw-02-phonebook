export default function ContactList({ contactList, onDelete }) {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Phone: {number}</p>

            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
