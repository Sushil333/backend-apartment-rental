import mongoose from "mongoose";

const apartmentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    size: { type: Number, required: true },
    rooms: { type: Number, required: true },
    address: { type: String, required: true },
    rent: { type: Number, required: true },
    deposit: { type: Number, required: true },
    longitude: { type: Number, required: false },
    latitude: { type: Number, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("Apartment", apartmentSchema);
