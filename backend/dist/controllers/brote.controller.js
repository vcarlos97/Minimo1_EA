"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brotes_1 = __importDefault(require("../models/brotes"));
const getBrotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield brotes_1.default.find({});
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(404).json(err);
    }
});
const getBrote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield brotes_1.default.find({ "name": req.params.name });
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(404).json(err);
    }
});
const updateBrote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.params.name;
    console.log("uevb", req.body);
    brotes_1.default.update({ "name": name }, { $set: { "name": req.body.name, "description": req.body.description, "start_date": req.body.start_date, "finish_date": req.body.finish_date } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
});
exports.default = { getBrotes, getBrote, updateBrote };
