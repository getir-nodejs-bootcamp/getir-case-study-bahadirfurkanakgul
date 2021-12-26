const express = require("express");
const recordController = require("../controllers/recordController");
const { validateRecordReq } = require("../middlewares/validator");
const router = express.Router();

router.route("/").post(validateRecordReq, recordController.getRecords);

module.exports = router;
