import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../api';
import Navbar from '../components/Navbar';
import Section from '../components/Section';

export default function Portfolio() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get(`/portfolio/${id}`).then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="portfolio">
      <Navbar />
      <Section id="about" title="About">{data.about}</Section>
      <Section id="skills" title="Skills">{JSON.stringify(data.skills)}</Section>
      <Section id="projects" title="Projects">{JSON.stringify(data.projects)}</Section>
      <Section id="education" title="Education">{JSON.stringify(data.education)}</Section>
      <Section id="additional" title="Additional">{data.additional.join(', ')}</Section>
    </div>
  );
}
