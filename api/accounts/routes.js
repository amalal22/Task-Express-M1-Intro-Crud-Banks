const express = require("express");
const {
  getAllAccounts,
  createAccount,
  deleteAccountById,
  updateAccountById,
} = require("./controllers");

const router = express.Router();

router.get("/", getAllAccounts);

router.post("/", createAccount);

router.delete("/:id", deleteAccountById);

router.put("/:id", updateAccountById);

module.exports = router;
