const fs = require("fs");

const files = fs.readdirSync("./");
console.log("files", files);

fs.readdir("./", function(err, res) {
  if (err) console.log(err);
  else console.log(res);
});
