import express from "express";
import ContactRouting from "./contact.routing";
const app = express.Router();

app.use("/core", ContactRouting);

export default app;
