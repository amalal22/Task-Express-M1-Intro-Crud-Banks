const accounts = require("../../accounts");
const Account = require("../../models/Account");

const getAccountsByID = async (req, res, next) => {
  try {
    return res.status(201).json(req.account);
  } catch (error) {
    next(error);
  }
};

const createAccount = async (req, res, next) => {
  try {
    const account = await Account.create(req.body);
    return res.status(201).json(account);
  } catch (error) {
    next(error);
  }
  const newAccount = {
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: req.body.funds,
  };
  accounts.push(newAccount);
  return res.json(accounts);
};

const deleteAccountById = async (req, res, next) => {
  try {
    await req.account.deleteOne();
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const updateAccountById = async (req, res, next) => {
  try {
    await req.account.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAccountsByID,
  updateAccountById,
  deleteAccountById,
  createAccount,
};
