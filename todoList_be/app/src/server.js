import express from "express";
import { router } from "./routers/usersRouter.js";
import cors from 'cors';

export function startServer(app) {
  const PORT = 8888;
  app.useAsync(cors());
  app.useAsync(express.json());
  app.useAsync(router);

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}