import { StatusCodes } from "../constants/status-codes";

export function ResponseError(
    error: any,
    statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR,
    message: string = 'Internal Server Error'
  ) {
    return {
      statusCode,
      message,
      error: error.message || error, // Thông tin chi tiết về lỗi
    };
  }