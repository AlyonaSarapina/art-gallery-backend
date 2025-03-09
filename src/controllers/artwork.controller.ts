import { RequestHandler } from "express";
import Artwork, { IArtwork } from "../models/artwork.model";

export const getArtworks: RequestHandler = async (req, res): Promise<void> => {
  try {
    const artworks = await Artwork.find();
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getArtworkById: RequestHandler = async (
  req,
  res
): Promise<void> => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) {
      res.status(404).json({ message: "Artwork not found" });
      return;
    }
    res.json(artwork);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createArtwork: RequestHandler = async (
  req,
  res
): Promise<void> => {
  try {
    const { title, artist } = req.body;
    const existingArtwork = await Artwork.findOne({ title, artist });

    if (existingArtwork) {
      res.status(400).json({ message: "This artwork already exists!" });
      return;
    }

    const newArtwork: IArtwork = new Artwork(req.body);
    const savedArtwork = await newArtwork.save();
    res.status(201).json(savedArtwork);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteArtwork: RequestHandler = async (
  req,
  res
): Promise<void> => {
  try {
    const artwork = await Artwork.findByIdAndDelete(req.params.id);
    if (!artwork) {
      res.status(404).json({ message: "Artwork not found" });
      return;
    }
    res.json({ message: "Artwork deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
