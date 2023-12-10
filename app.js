import "dotenv/config";
import express from "express";
import cors from "cors";
import transactionRoutes from "./routes/transaction.routes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*",
    methods: "GET,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    statusCode: 200,
    message: "Welcome To Midtrans Service",
  });
});

transactionRoutes(app);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found",
    status: 404,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
