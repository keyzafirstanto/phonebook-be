import { HttpExceptionUtil } from "@utils";
import { NextFunction, Request, Response } from "express";
import { ResponseConstant } from "@constants";

export interface AuthorizationTypeTokenDto {
  _id: string;
  email: string;
  phone: string;
  exp: number;
  iat: number;
}

export default class AuthorizationMiddleware {
  static handleSendError(req: Request, res: Response, next: NextFunction) {
    const error = new HttpExceptionUtil(404, "Not Found");
    next(error);
  }

  static handleErrorGlobal(error: HttpExceptionUtil | any, req: Request, res: Response, next: NextFunction) {
    if (typeof error.code == "number") {
      if (error.name == "MongoServerError") {
        ResponseConstant.error({ code: 400, message: error.name, data: { code: error.code, message: error.message } }, res);
      } else {
        const dataError = {
          code: error.code || 500,
          message: error.message || "Internal Server Error",
          data: error.data,
        };
        ResponseConstant.error({ code: dataError.code, message: dataError.message, data: dataError.data }, res);
      }
    } else {
      if (error.code == "ECONNABORTED") {
        ResponseConstant.error({ code: 504, message: error.message }, res);
      } else {
        if (error.name == "ValidationError") {
          let messageError = "";
          let dataError = {} as any;
          Object.keys(error.errors).forEach((key) => {
            dataError[key] = error.errors[key].message;
            messageError = error.errors[key].message;
          });
          ResponseConstant.error({ code: 400, message: messageError || error.name, data: dataError }, res);
        } else {
          ResponseConstant.error({ code: 500, message: error.message, data: error.data }, res);
        }
      }
    }
    res.end();
  }
}
