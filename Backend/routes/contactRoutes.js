import express from "express";
import { contactControllers } from "../controllers/contactControllers.js";

const contactRouter = express.Router();

contactRouter.route("/").post(contactControllers);

export default contactRouter;