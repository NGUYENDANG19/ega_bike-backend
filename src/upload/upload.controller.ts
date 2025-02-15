import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from './multer.config';
import { UploadService } from './upload.service';
import { UploadDto } from './dto/upload.dto';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }

    @Post()
    @UseInterceptors(FileInterceptor('file', multerConfig))
    async uploadFile(
        @Body() uploadDto: UploadDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        const fileUrl = await this.uploadService.uploadFile(file, uploadDto.type);

        return {
            message: 'Upload thành công',
            url: fileUrl
        }
    }
}
