import express from "express"
import { addPlace, allPlaces, deletePlace, updatePlaces } from "../controller/placeController.js"
import multer from "multer"


export const routes = express.Router()

routes.post("/add-places", addPlace)
routes.get("/all-places",allPlaces)
routes.delete("/delete-place", deletePlace)
routes.put("/update-place", updatePlaces)