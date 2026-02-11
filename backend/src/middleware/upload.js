import multer from 'multer';

export const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    if (file.mimetype !== 'application/pdf') {
      cb(new Error('Only PDFs allowed'));
    }
    cb(null, true);
  }
});
