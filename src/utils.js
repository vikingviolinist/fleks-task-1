import { ORDER, USER } from './constants';

export const convertCamelCase = (str) =>
  str.replace(/([A-Z])/g, ' $1').replace(/^./, (res) => res.toUpperCase());

export const filterUsersByValue = (user, value) =>
  `${user.firstName}${user.lastName}`
    .replace(/\s+/g, '')
    .toLowerCase()
    .includes(value.replace(/\s+/g, '').toLowerCase());

export const sortUsersByKey = (users, key, order) => {
  const sortedUsers = [...users].sort((prev, curr) => {
    const first =
      key === USER.BIRTHDAY ? new Date(prev[key]) : prev[key].toLowerCase();

    const second =
      key === USER.BIRTHDAY ? new Date(curr[key]) : curr[key].toLowerCase();

    if (first < second) return -1;
    if (first > second) return 1;
    return 0;
  });

  if (order === ORDER.DESCENDING) {
    sortedUsers.reverse();
  }

  return sortedUsers;
};
