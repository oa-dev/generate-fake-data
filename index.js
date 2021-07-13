const fs = require("fs");
const faker = require("faker");
const { yourPath } = require("./config");
const directoryName = "fake-users";
const pathTo = `${yourPath}${directoryName}/`;

const generateUserInfo = () => {
  const id = (Math.random() * 10).toFixed(6);
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

const makeDir = () => {
  fs.mkdir(`${pathTo}`, { recursive: true }, (err) => {
    if (err) throw err;
  });
};

const createFile = (fileName, number) => {
  fs.writeFile(
    `${pathTo}${fileName}`,
    JSON.stringify(mergeUserAndPostData(number)),
    (err) => {
      if (err) throw err;
      console.log(`${fileName} has been saved successfully`);
    }
  );
};

const createData = () => {
  makeDir();
  createFile("users-posts.json", 100);
};

createData();
