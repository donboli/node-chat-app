const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'John',
      room: 'A'
    }, {
      id: '2',
      name: 'Jane',
      room: 'B'
    }, {
      id: '3',
      name: 'Peter',
      room: 'C'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 1234,
      name: 'John',
      room: 'A'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('A');
    expect(userList).toEqual([users.users[0].name])
  });

  it('should return a user by id', () => {
    var user = users.getUser('2');
    expect(user).toEqual(users.users[1]);
  });

  it('should remove a user by id', () => {
    var user = users.removeUser('2');
    expect(users.users.length).toBe(2);
  });
});