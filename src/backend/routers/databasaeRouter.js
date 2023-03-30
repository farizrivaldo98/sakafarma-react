const express = require("express");
const databaseControllers = require("../controllers/databaseControllers");
const routers = express.Router();

routers.get("/get", databaseControllers.getData);
routers.post("/add", databaseControllers.addData);
routers.patch("/edit/:id", databaseControllers.editData);
routers.delete("/delet/:id", databaseControllers.deletData);
routers.get("/pareto", databaseControllers.fetchDataPareto);

module.exports = routers;
