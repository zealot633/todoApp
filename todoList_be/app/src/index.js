import express from "express";
import { addAsync } from "@awaitjs/express";
import { startServer } from "./server.js";

const app = addAsync(express());


async function start() {
try {
    startServer(app);
}
catch (e) {
console.log(e.message)
}
}

start().then(()=> console.log('wow'))