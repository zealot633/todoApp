const startServer = require("./server.js");
const express = require("express");
const { addAsync } = require("@awaitjs/express");

const app = addAsync(express());

async function start() {
  try {
    startServer(app);
  } catch (e) {
    console.log(e.message);
  }
}

start().then(() => console.log("wow"));
