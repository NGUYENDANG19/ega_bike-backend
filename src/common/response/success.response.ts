import { MetaDataType } from '../interface/meta-data';

export function ResponseSuccess(
  data: any = null,
  message: string = 'Success',
  statusCode: number = 200,
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
  statusCode: number = 200,
  message: string = 'Success',
) {
  return {
    statusCode,
    message,
    data,
    meta,
  };
}