import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
