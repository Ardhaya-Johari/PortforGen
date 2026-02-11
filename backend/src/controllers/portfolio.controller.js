import { v4 as uuid } from 'uuid';
import pool from '../config/db.js';
import { extractText } from '../utils/pdfParser.js';
import { generatePortfolio } from '../services/gemini.service.js';

export async function createPortfolio(req, res) {
  try {
    const resumeText = await extractText(req.file.buffer);
    const portfolioJSON = await generatePortfolio(resumeText);

    const id = uuid();
    await pool.query(
      'INSERT INTO portfolios (id, data) VALUES ($1, $2)',
      [id, portfolioJSON]
    );

    res.json({ id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Portfolio generation failed' });
  }
}

export async function getPortfolio(req, res) {
  const { id } = req.params;
  const result = await pool.query(
    'SELECT data FROM portfolios WHERE id=$1',
    [id]
  );

  res.json(result.rows[0].data);
}
