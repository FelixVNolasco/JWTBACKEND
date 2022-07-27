const { Router } = require("express");
const { createShoe } = require("../controllers/shoe");

const router = Router();

router.post("/new/shoe", createShoe);

module.exports = router;
