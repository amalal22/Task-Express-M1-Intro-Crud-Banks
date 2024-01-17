const express = require("express");
const app = express();
app.use(express.json());
const accounts = require("./accounts");
app.get("/accounts", (req, res) => {
  return res.status(200).json(accounts);
});

app.post("/accounts", (req, res) => {
  const newAccount = {
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: req.body.funds,
  };
  accounts.push(newAccount);
  return res.json(accounts);
});

app.delete("/accounts/:id", (req, res) => {
  const { id } = req.params;
  const account = accounts.find((account) => account.id == id);
  if (!account) {
    return res.status(404);
  }
  accountsUpdated = accounts.filter((account) => account.id != id);
  return res.json(accountsUpdated);
});
app.put("/accounts/:id", (req, res) => {
  const { id } = req.params;
  //   res.params.funds = re;
  const accountF = accounts.find((account) => {
    return account.id == id;
  });
  if (!accountF) {
    return res.status(404);
  }
  accountF.username = req.body.username;
  accountF.funds = req.body.funds;

  return res.json(accountF);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("started");
});
