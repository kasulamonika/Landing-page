import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { DemoOne } from './components/HeroScrollAnimationDemo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/scroll-animation" element={<DemoOne />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}