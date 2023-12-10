import express from "express";
import { query } from "express-validator";
import validateTransaction from "../middleware/validateTransaction.js";
import PostCreateTransaction from "../controller/createTransaction.js";
import CheckStatusTransaction from "../controller/checkStatusTransaction.js";
import ExpireTransaction from "../controller/expireTransaction.js";
import RefundTransaction from "../controller/refundTransaction.js";
import CancelTransaction from "../controller/cancelTransaction.js";

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

  router.post(
    "/expire-transaction",
    query("order_id").notEmpty(),
    ExpireTransaction
  );

  router.post(
    "/refund-transaction",
    validateTransaction("refundTransaction"),
    RefundTransaction
  );

  router.post(
    "/cancel-transaction",
    query("order_id").notEmpty(),
    CancelTransaction
  );

  app.use("/", router);
};

export default transactionRoutes;
