import { Router } from 'express';
import { upload } from '../middleware/upload.js';
import {
  createPortfolio,
  getPortfolio
} from '../controllers/portfolio.controller.js';

const router = Router();

router.post('/generate', upload.single('resume'), createPortfolio);
router.get('/:id', getPortfolio);

export default router;
