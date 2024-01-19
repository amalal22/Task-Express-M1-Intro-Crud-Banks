const express = require("express");
const app = express();

const accountRouter = require("./api/accounts/routes");
app.use(express.json());

app.use("/api/accounts", accountRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("started");
});
