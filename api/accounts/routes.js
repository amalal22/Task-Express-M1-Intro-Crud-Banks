const express = require("express");
const {
  getAccountsByID,
  createAccount,
  deleteAccountById,
  updateAccountById,
} = require("./controllers");
const Account = require("../../models/Account");

const router = express.Router();

router.param("_id", async (req, res, next, _id) => {
  const account = await Account.findById(_id);
  if (!account)
    return res
      .status(404)
      .json({ message: "Student with this id is not found! " });
  req.account = account;
  next();
});

router.get("/:_id", getAccountsByID);

router.post("/", createAccount);

router.delete("/:_id", deleteAccountById);

router.put("/:_id", updateAccountById);

module.exports = router;
