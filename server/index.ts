import express from "express";
import bodyParser from "body-parser";
import router from "@src/routes";
import { ErrorStatus } from "@src/models";

const { PORT } = process.env;
const app = express();

app.use(bodyParser.json());

app.use(router);

/// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found") as ErrorStatus;
  err.status = 404;
  next(err);
});

const server = app.listen(PORT ?? 3000, () => {
  const address = server.address();
  console.log(
    `Listening on port ${typeof address === "string" ? address : address?.port}`
  );
});
