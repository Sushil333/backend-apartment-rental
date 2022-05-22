import express from "express";

import {
  addApartment,
  updateApartment,
  deleteApartment,
  getAllApartments,
} from "../controllers/apartmentController.js";
import verifyJwt from "../utils/verifyJwt.js";

const router = express.Router();

router.post("/add", verifyJwt, addApartment);
router.post("/delete", verifyJwt, deleteApartment);
router.post("/update", verifyJwt, updateApartment);

router.get("/all", getAllApartments);

export default router;
