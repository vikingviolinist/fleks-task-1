import { useState } from 'react';

import data from './data.json';
import { sortUsersByKey } from './utils';
import SortInput from './components/SortInput';
import OrderInput from './components/OrderInput';
import SearchInput from './components/SearchInput';
import Table from './components/Table';

const App = () => {
  const [users, setUsers] = useState(data);
  const [filterValue, setFilterValue] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleSort = (e) => {
    const key = e.target.value;
    const sortedUsers = sortUsersByKey(users, key, sortOrder);

    setSortKey(key);
    setUsers(sortedUsers);
  };

  const handleOrder = (e) => {
    const order = e.target.value;
    const sortedUsers = sortUsersByKey(users, sortKey, order);

    setSortOrder(order);
    setUsers(sortedUsers);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setFilterValue(value);
  };

  return (
    <div className="mx-auto max-w-xl text-left">
      <h1 className="text-3xl font-bold my-3">Birthdays</h1>
      <SortInput handleSort={handleSort} />
      <OrderInput handleOrder={handleOrder} disabled={!sortKey} />
      <SearchInput handleSearch={handleSearch} />
      <Table users={users} filterValue={filterValue} />
    </div>
  );
};

export default App;
