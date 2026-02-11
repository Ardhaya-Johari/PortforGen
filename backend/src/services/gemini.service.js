import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generatePortfolio(resumeText) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `
You are an AI resume-to-portfolio generator.

Rules:
- DO NOT invent any information
- DO NOT add explanations
- Output ONLY valid JSON
- If information is missing, return empty strings or empty arrays

Resume Text:
"""
${resumeText}
"""

Output strictly in this JSON format:
{
  "about": "",
  "contact": {
    "email": "",
    "phone": "",
    "linkedin": "",
    "github": ""
  },
  "skills": {
    "languages": [],
    "frameworks": [],
    "tools": []
  },
  "projects": [
    {
      "title": "",
      "description": []
    }
  ],
  "education": [
    {
      "degree": "",
      "institute": "",
      "year": ""
    }
  ],
  "additional": []
}
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return JSON.parse(text);
}
