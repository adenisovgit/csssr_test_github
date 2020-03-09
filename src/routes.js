const host = 'https://api.github.com';
const prefix = 'search';

export default {
  searchUsers: (searchStr, perPage, page) => [host, prefix,
    `users?q=${searchStr}&per_page=${perPage}&page=${page}`].join('/'),
  getUser: (username) => [host,
    `users`, username].join('/'),
};
