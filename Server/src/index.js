const server = require("./app");
const { conn } = require("./DB_connection");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

server.listen(PORT, async () => {
  await conn.sync({ alter: true });
  console.log("Server raised in port: " + PORT);
});
