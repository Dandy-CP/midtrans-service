import express from "express";
import PostCreateTransaction from "../controller/createTransaction.js";

const transactionRoutes = (app) => {
  const router = express.Router();

  router.post("/transaction", PostCreateTransaction);

  app.use("/", router);
};

export default transactionRoutes;
