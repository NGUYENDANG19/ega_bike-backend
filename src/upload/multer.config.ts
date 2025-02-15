import { diskStorage } from 'multer';
import { extname } from 'path';
import { UPLOAD_TYPES } from 'src/common/enums/types';

export const multerConfig = {
    storage: diskStorage({
        destination: (req, file, cb) => {
            let uploadPath = './uploads';

            switch (req.body.type) {
                case UPLOAD_TYPES.CATEGORY_IMAGE:
                    uploadPath += '/category_images';
                    break;
                case UPLOAD_TYPES.PRODUCT_IMAGE:
                    uploadPath += '/product_images';
                    break;
                case UPLOAD_TYPES.BRAND_LOGO:
                    uploadPath += '/brand_logos';
                    break;
                default:
                    uploadPath += '/';
            }

            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, uniqueSuffix + extname(file.originalname));
        },
    }),
};
