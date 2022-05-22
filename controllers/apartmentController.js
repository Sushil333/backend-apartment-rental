import asyncHandler from "express-async-handler";

import Apartment from "../models/apartment.js";

// @desc    Add apartment post
// @route   POST /api/apartment/add
// @access  Private
export const addApartment = asyncHandler(async (req, res) => {
  const { size, rooms, address, rent, deposit } = req.body;

  const errorList = [];

  if (!size) errorList.push("Apartment size is required!");
  if (!rooms) errorList.push("Room number is required!");
  if (!address) errorList.push("Address is required!");
  if (!rent) errorList.push("Rent amount is required!");
  if (!deposit) errorList.push("Diposit is required!");

  if (!size || !rooms || !address || !rent || !deposit)
    res.status(400).json({ data: errorList });

  const createdApartment = await Apartment.create({
    owner: req.user.id,
    rooms,
    size,
    rent,
    address,
    deposit,
  });

  res.status(200).json({ data: createdApartment });
});

// @desc    Update Apartment
// @route   POST /api/apartment/update
// @access  Private
export const updateApartment = asyncHandler(async (req, res) => {
  const { id, size, rooms, address, rent, deposit } = req.body;

  const errorList = [];

  if (!id) errorList.push("Id is required!");
  if (!size) errorList.push("Apartment size is required!");
  if (!rooms) errorList.push("Room number is required!");
  if (!address) errorList.push("Address is required!");
  if (!rent) errorList.push("Rent amount is required!");
  if (!deposit) errorList.push("Diposit is required!");

  if (!id || !size || !rooms || !address || !rent || !deposit)
    res.status(400).json({ data: errorList });

  const apt = await Apartment.findById(id);

  if (!apt) res.status(400).json({ data: "Apartment doesn't exists!" });

  // check for oz user
  // if (apt.owner !== req.user.id)
  //   res.status(400).json({ data: "Something went wrong!" });

  apt.rooms = rooms;
  apt.size = size;
  apt.rent = rent;
  apt.address = address;
  apt.deposit = deposit;
  apt.save();

  res.status(200).json({ data: "Recored update successfully!" });
});

// @desc    Delete apartment
// @route   POST /api/apartment/delete
// @access  Private
export const deleteApartment = asyncHandler(async (req, res) => {
  const { aptId } = req.body;

  const apt = await Apartment.findById(aptId);

  if (!apt) res.status(400).json({ data: "Apartment doesn't exists!" });

  apt.remove();

  res.status(200).json({ data: "Recored deleted successfully" });
});


// @desc    Get All Apartments
// @route   POST /api/apartment/all
// @access  Private
export const getAllApartments = asyncHandler(async (req, res) => {
  const apts = await Apartment.find({});
  res.status(200).json({ data: apts });
});
