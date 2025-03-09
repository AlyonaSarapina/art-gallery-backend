import express, { Router } from "express";
import {
  getArtworks,
  getArtworkById,
  createArtwork,
  deleteArtwork,
} from "../controllers/artwork.controller";

const router: Router = express.Router();

router.get("/", getArtworks);
router.get("/:id", getArtworkById);
router.post("/", createArtwork);
router.delete("/:id", deleteArtwork);

export default router;
