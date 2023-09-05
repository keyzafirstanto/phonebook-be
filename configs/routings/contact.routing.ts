import { ContactController } from "@controllers";
import express from "express";
import { graphqlHTTP } from "express-graphql";
const app = express.Router();

app.use("/contact", graphqlHTTP({ schema: ContactController }));

export default app;
