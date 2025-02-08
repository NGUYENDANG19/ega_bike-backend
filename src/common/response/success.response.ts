import { StatusCodes } from '../constants/status-codes';
import { MetaDataType } from '../interface/meta-data';

export function ResponseSuccess(
  data: any = null,
  message: string = 'Success',
  statusCode: number = StatusCodes.SUCCESS,
) {
  return {
    statusCode,
    message,
    data,
  };
}

export function ResponseWithPagination(
  data: any,
  meta: MetaDataType,
  statusCode: number = StatusCodes.SUCCESS,
  message: string = 'Success',
) {
  return {
    statusCode,
    message,
    data,
    meta,
  };
}