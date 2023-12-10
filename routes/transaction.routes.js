import express from "express";
import { query } from "express-validator";
import validateTransaction from "../middleware/validateTransaction.js";
import PostCreateTransaction from "../controller/createTransaction.js";
import CheckStatusTransaction from "../controller/checkStatusTransaction.js";

const transactionRoutes = (app) => {
  const router = express.Router();

  router.post(
    "/transaction",
    validateTransaction("createTransaction"),
    PostCreateTransaction
  );

  router.post(
    "/check-transaction",
    query("order_id").notEmpty(),
    CheckStatusTransaction
  );

  app.use("/", router);
};

export default transactionRoutes;
