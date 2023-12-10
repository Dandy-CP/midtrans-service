import { validationResult } from "express-validator";
import snap from "../utils/snapMidtrans.js";

const ExpireTransaction = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const { order_id } = req.query;

  snap.transaction
    .expire(order_id)
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((error) => {
      return res
        .status(Number(error.httpStatusCode))
        .send({ message: error.message, status: Number(error.httpStatusCode) });
    });
};

export default ExpireTransaction;
