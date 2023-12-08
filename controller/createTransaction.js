import snap from "../middleware/snapMidtrans";

const PostCreateTransaction = (req, res) => {
  const { order_id, ammount, first_name, last_name, email, phone } = req.body;

  if (order_id === "") {
    return res.status(400).send({ message: "order_id is required" });
  } else if (ammount === 0) {
    return res.status(400).send({ message: "ammount value cant 0" });
  } else if (typeof ammount === "string") {
    return res.status(400).send({ message: "ammount type must be number" });
  } else if (typeof order_id !== "string") {
    return res.status(400).send({ message: "order_id type must be string" });
  }

  const parameters = {
    transaction_details: {
      order_id: order_id,
      gross_amount: ammount,
    },
  };

  snap.createTransaction(parameters).then((transaction) => {
    return res.status(200).send(transaction);
  });
};

export default PostCreateTransaction;
