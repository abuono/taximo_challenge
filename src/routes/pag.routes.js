// import { Router } from "express";
const router = require('express').Router();
// const path = require('path')

router.get('/', (req, res) => { res.render('./pages/home', {title: 'Taximo_Challenge - Alejandro Bueno'}) })

//module.exports = router;

module.exports = router;