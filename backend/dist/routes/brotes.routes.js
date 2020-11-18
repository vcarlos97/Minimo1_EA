"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const brote_controller_1 = __importDefault(require("../controllers/brote.controller"));
const router = express_1.Router();
router.get('/all', brote_controller_1.default.getBrotes);
router.get('/:name', brote_controller_1.default.getBrote);
router.post('/newBrote', brote_controller_1.default.updateBrote);
module.exports = router;
