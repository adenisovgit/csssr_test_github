const host = 'https://api.github.com';

export default {
  searchUsers: (searchStr, perPage, page) => [host,
    `search/users?q=${searchStr}&per_page=${perPage}&page=${page}`].join('/'),
  searchIssues: (user, repo, perPage, page, state = 'all') => [host,
    'repos', user, repo, `issues?per_page=${perPage}&page=${page}&state=${state}`].join('/'),
  getUser: (username) => [host,
    'users', username].join('/'),
};
