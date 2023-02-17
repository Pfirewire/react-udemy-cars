import { createAction } from "@reduxjs/toolkit";
import { addCar } from "../slices/carsSlice";

export const resetForm = createAction(addCar);