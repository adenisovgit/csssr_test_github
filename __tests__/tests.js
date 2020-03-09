import routes from '../src/routes';
import issues, { actions as issuesActions } from '../src/features/issues/issuesSlice';

test('routes', () => {
  const routeSearchUsers = 'https://api.github.com/search/users?q=username&per_page=5&page=1';
  const routeGetUser = 'https://api.github.com/users/username';
  expect(routes.searchUsers('username', 5, 1)).toEqual(routeSearchUsers);
  expect(routes.getUser('username')).toEqual(routeGetUser);
});


describe('issues reducer', () => {
  const initialState = {
    data: [], perPage: 5, currentPage: 1,
  };

  it('should handle initial state', () => {
    expect(issues(undefined, {})).toEqual(initialState);
  });

  it('should handle issues/addIssues', () => {
    expect(
      issues(initialState, {
        type: 'issues/addIssues',
        payload: [
          { issue: 12345, body: '54321' },
          { issue: 67890, body: '09876' },
        ],
      }),
    ).toEqual({
      data: [
        { issue: 12345, body: '54321' },
        { issue: 67890, body: '09876' },
      ],
      perPage: 5,
      currentPage: 1,
    });
  });
});
