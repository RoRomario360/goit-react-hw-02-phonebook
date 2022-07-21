export default function Filter({ filterContacts, handlerFilterUsers }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="name" required onChange={handlerFilterUsers} />
    </label>
  );
}
