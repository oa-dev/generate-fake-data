const fs = require("fs");
const faker = require("faker");
const { yourPath } = require("./config");

const makeDir = (yourPathTo, directoryName) => {
  fs.mkdir(`${yourPathTo}${directoryName}`, { recursive: true }, (err) => {
    if (err) throw err;
  });
};

// makeDir(yourPath, "fake-users");

const generateUserInfo = () => {
  const id = Math.random() * 1000;
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const userName = faker.internet.userName();
  const avatar = faker.internet.avatar();
  return { id, firstName, lastName, userName, avatar };
};

const generatePost = () => {
  const vehicle = faker.vehicle.vehicle();
  const colour = faker.vehicle.color();
  const review = faker.lorem.paragraph();
  return { vehicle, colour, review };
};

const mergeUserAndPostData = (amount, data = []) => {
  while (data.length < amount) {
    const { id, firstName, lastName, userName, avatar } = generateUserInfo();
    const { vehicle, colour, review } = generatePost();
    data.push({
      id,
      firstName,
      lastName,
      userName,
      avatar,
      vehicle,
      colour,
      review,
    });
  }
  return data;
};
// console.log(mergeUserAndPostData(3));
