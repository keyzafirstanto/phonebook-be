"use strict";
import dotenv from "dotenv";
import "module-alias/register";
import "moment/locale/id";
import "yup-phone";
dotenv.config();

import { ConfigRouting } from "@configs";
import { AuthorizationMiddleware } from "@middlewares";
import bodyParser from "body-parser";
import cros from "cors";
import express from "express";
import morganBody from "morgan-body";

const app = express();
const PORT = process.env.PORT_CORE_SERVICE || 9001;

app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(cros());
morganBody(app, { timezone: "Asia/Jakarta", logAllReqHeader: true });

app.use(ConfigRouting);
app.use(AuthorizationMiddleware.handleSendError);
app.use(AuthorizationMiddleware.handleErrorGlobal);

const server = app.listen(PORT, () => console.info("🔵 Server node running on PORT " + PORT));

export default server;
