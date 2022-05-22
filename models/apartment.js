import mongoose from "mongoose";

const apartmentSchema = mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    size: { type: Number, require: true },
    room: { type: Number, require: true },
    address: { type: String, require: true },
    rent: { type: Number, require: true },
    deposit: { type: Number, require: true },
  },
  { timestamps: true }
);

export default mongoose.model("Apartment", apartmentSchema);
