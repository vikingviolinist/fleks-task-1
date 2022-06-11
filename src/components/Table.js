import { filterUsersByValue } from '../utils';

const Table = ({ users, filterValue }) => (
  <table className="w-full mt-3">
    <thead>
      <tr>
        <th>Name</th>
        <th>Birthday</th>
      </tr>
    </thead>
    <tbody>
      {users
        .filter((user) => filterUsersByValue(user, filterValue))
        .map(({ firstName, lastName, birthday }) => (
          // In a regular database each user would have a unique ID which would be used as key.
          // Let's pretend the combination of all user's values is the ID.
          <tr key={firstName + lastName + birthday}>
            <td>
              {firstName} {lastName}
            </td>
            <td>{new Date(birthday).toLocaleDateString()}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

export default Table;
