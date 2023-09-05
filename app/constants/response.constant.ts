import { Response } from "express";
import moment = require("moment");

interface ResponseSuccessDto {
  code?: number;
  message?: string;
  data?: any;
}

interface ResponseErrorDto {
  code?: number;
  message?: string;
  data?: any;
  name?: string;
}

export default class ResponseConstant {
  static success(data: ResponseSuccessDto, res: Response) {
    const newData = {
      status_code: data.code ? data.code : 200,
      message: data.message ? data.message : "SUCCESS",
      success: true,
      date: moment().format("YYYY-MM-DD HH:mm:ss"),
      data: data.data ? data.data : undefined,
    };

    res.status(newData.status_code).json(newData);
    res.end();
  }

  static error(data: ResponseErrorDto, res: Response) {
    const newData = {
      status_code: data.code ? data.code : 500,
      message: data.message ? data.message : "ERROR",
      success: false,
      date: moment().format("YYYY-MM-DD HH:mm:ss"),
      data: data.data ? data.data : undefined,
    };

    res.status(newData.status_code).json(newData);
    res.end();
  }

  static dataPagination(result: any[], page: any, limit: any) {
    return {
      data: result,
      nextPage: result.length !== Number(limit) ? Number(page) : Number(page) + 1,
      previousPage: Number(page) === 0 ? 0 : Number(page) - 1,
      currentPage: Number(page),
      totalPerPage: result.length,
    };
  }
}
