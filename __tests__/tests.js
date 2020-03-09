import routes from '../src/routes';

test('routes', () => {
  const routeSearchUsers = 'https://api.github.com/search/users?q=username&per_page=5&page=1';
  const routeGetUser = 'https://api.github.com/users/username';
  expect(routes.searchUsers('username', 5, 1)).toEqual(routeSearchUsers);
  expect(routes.getUser('username')).toEqual(routeGetUser);
});
