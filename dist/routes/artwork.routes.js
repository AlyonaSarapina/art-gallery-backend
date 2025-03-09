"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var artwork_controller_1 = require("../controllers/artwork.controller");
var router = express_1.default.Router();
router.get("/", artwork_controller_1.getArtworks);
router.get("/:id", artwork_controller_1.getArtworkById);
router.post("/", artwork_controller_1.createArtwork);
router.put("/:id", artwork_controller_1.updateArtwork);
router.delete("/:id", artwork_controller_1.deleteArtwork);
exports.default = router;
