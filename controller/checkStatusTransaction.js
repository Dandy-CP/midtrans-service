import { validationResult } from "express-validator";
import snap from "../utils/snapMidtrans.js";

const CheckStatusTransaction = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const { order_id } = req.query;

  snap.transaction
    .status(order_id)
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((error) => {
      return res
        .status(400)
        .send({ message: error.message, status: error.httpStatusCode });
    });
};

export default CheckStatusTransaction;
