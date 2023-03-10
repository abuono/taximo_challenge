// import { Router } from "express";
const router = require('express').Router();
// import { control } from "../controllers/calc.controller"
const control = require('../controllers/calc.controller')

router.post('/synchronous_shopping', control.calc)

module.exports = router;