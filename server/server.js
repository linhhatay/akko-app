const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const db = require("./configs/db");

db.connect();

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
