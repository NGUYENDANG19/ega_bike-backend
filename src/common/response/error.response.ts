export function ResponseError(
    error: any,
    statusCode: number = 500,
    message: string = 'Internal Server Error'
  ) {
    return {
      statusCode,
      message,
      error: error.message || error, // Thông tin chi tiết về lỗi
    };
  }