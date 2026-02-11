import { api } from '../api';

export default function Landing() {
  async function handleUpload(e) {
    const form = new FormData();
    form.append('resume', e.target.files[0]);

    const res = await api.post('/portfolio/generate', form);
    window.location.href = `/portfolio/${res.data.id}`;
  }

  return (
    <div className="landing">
      <h1>PortfoGen</h1>
      <p>AI-Powered Resume → Portfolio Generator</p>
      <input type="file" accept="application/pdf" onChange={handleUpload} />
    </div>
  );
}
