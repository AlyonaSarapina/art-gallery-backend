import mongoose, { Schema, Document } from "mongoose";

export interface IArtwork extends Document {
  title: string;
  artist: string;
  type: "painting" | "sculpture";
  price: number;
  availability: boolean;
  image?: string;
}

const ArtworkSchema: Schema = new Schema({
  title: { type: String, required: true, maxlength: 99 },
  artist: { type: String, required: true, maxlength: 50 },
  type: { type: String, required: true, enum: ["painting", "sculpture"] },
  price: { type: Number, required: true, min: 0 },
  availability: { type: Boolean, default: true },
  image: { type: String },
});

ArtworkSchema.index({ title: 1, artist: 1 }, { unique: true });

export default mongoose.model<IArtwork>("Artwork", ArtworkSchema);
