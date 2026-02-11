import pdf from 'pdf-parse';

export async function extractText(buffer) {
  const data = await pdf(buffer);
  return data.text;
}
