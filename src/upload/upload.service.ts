import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
    async uploadFile(file: Express.Multer.File, type: string) {
        if (!file) {
            throw new Error('File không hợp lệ');
        }

        // Đường dẫn ảnh sau khi upload
        const fileUrl = `/uploads/${type}/${file.filename}`;

        return { url: fileUrl }
    }
}
