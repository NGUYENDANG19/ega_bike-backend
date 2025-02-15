import { IsNotEmpty, IsEnum } from 'class-validator';
import { UPLOAD_TYPES } from 'src/common/enums/types';

export class UploadDto {
    @IsNotEmpty()
    @IsEnum(UPLOAD_TYPES)
    type: UPLOAD_TYPES;
}
