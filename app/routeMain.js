const express = require("express");
const router = express.Router();

const controller = require("./controller/InputController");

// route init

router.post("/submit", controller.addData);
router.get("/rekap",controller.getRekapKinerja);
router.delete("/rekap/:id", controller.deleteData);

module.exports = router;