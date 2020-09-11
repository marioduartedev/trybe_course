const users = {
4: { name: 'Mark' },
5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

it('returns the UserName', async () => {
  const data = await getUserName(4);
  expect(data).toEqual('Mark');
});

it('returns the UserName', async () => {
  try {
    await getUserName(6);
  } catch (error) {
    expect(error).toEqual({ error: 'User with 6 not found.' });
  }
});