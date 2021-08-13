const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
    const upDateUsers = allUsers.map((user) => {
      return user.name === userName ? { ...user, active: !user.active } : user;
    });
    resolve(upDateUsers);
  });
};

const logger2 = (upDateUsers) => console.table(upDateUsers);

toggleUserState(users, "Mango").then(logger2);
toggleUserState(users, "Lux").then(logger2);
