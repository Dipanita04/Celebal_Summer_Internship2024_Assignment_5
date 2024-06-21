const express = require("express");
const router = express.Router();
const Record = require("../models/Record");

router.get("/", async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);
    res.json(record);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const record = new Record({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
    Address: req.body.Address,
  });

  try {
    const a1 = await record.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);
    record.sub = req.body.sub;
    const a1 = await record.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);
    res.json(record);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
