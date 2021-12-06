const express = require("express");
const cors = require("cors");
const router = require("./routers/usersRouter");

function startServer(app) {
  const PORT = 8888;
  app.useAsync(cors());
  app.useAsync(express.json());
  app.useAsync(router);
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

module.exports = startServer;
