const fs = require("fs");
const { yourPath } = require("./config");

const makeDir = (yourPathTo, directoryName) => {
  fs.mkdir(`${yourPathTo}${directoryName}`, { recursive: true }, (err) => {
    if (err) throw err;
  });
};

// makeDir(yourPath, "fake-users");
