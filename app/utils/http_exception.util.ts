export default class HttpExceptionUtil extends Error {
  code: number = 500;
  message: string = "Internal Server Error";
  data: any;
  constructor(code: number, message: string, data?: any) {
    super(message);
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
