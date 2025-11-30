import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { DemoOne } from './components/HeroScrollAnimationDemo';
import { DigitalSerenityDemo } from './components/DigitalSerenityDemo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/scroll-animation" element={<DemoOne />} />
        <Route path="/digital-serenity" element={<DigitalSerenityDemo />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}