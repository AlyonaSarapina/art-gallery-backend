"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var db_1 = __importDefault(require("./config/db"));
var artwork_routes_1 = __importDefault(require("./routes/artwork.routes"));
dotenv_1.default.config();
(0, db_1.default)();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/artworks", artwork_routes_1.default);
var PORT = process.env.PORT || 5001;
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
