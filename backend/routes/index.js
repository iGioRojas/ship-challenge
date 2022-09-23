const { response } = require("express");
var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* Drivers */
/* GET all drivers */
router.get("/drivers", (req, res) => {
  models.driver
    .findAll({
      attributes: { exclude: ["creation_date", "avatar_url", "phone", "city"] },
    })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

/* Vehicles */
// List vehicles by driver
router.get("/driver/:id", (req, res) => {
  let driver = req.params.id;
  models.vehicle
    .findAll({
      where: {
        driver_id: driver,
      },
      attributes: { exclude: ["creation_date"] },
    })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

// Create a new vehicle
router.post("vehicle/create", (req, res) => {
  const { plate, model, type, capacity, driver_id } = req.body;
  models.vehicle
    .create({
      plate: plate,
      model: model,
      type: type,
      capacity: capacity,
      driver_id: driver_id,
    })
    .then((response) => {
      res.sendStatus(200).send("Successful Registration");
    })
    .catch((err) => {
      res.send(err);
    });
});

//Update a existing vehicle
router.put("vehicle/update", (req, res) => {
  const { id, plate, model, type, capacity, driver_id } = req.body;
  models.vehicle
    .update({
      plate: plate,
      model: model,
      type: type,
      capacity: capacity,
      driver_id: driver_id,
    },{where:{id:id}})
    .then((response) => {
      res.sendStatus(200).send("Successful Update");
    })
    .catch((err) => {
      res.send(err);
    });
});

//Delete a vehicle
router.delete("vehicle/delete/:id", (req, res) => {
  let id = req.params.id;
  models.vehicle.destroy({ where: { id: id } });
});

module.exports = router;
