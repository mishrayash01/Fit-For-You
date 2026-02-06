import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navigation from "@/react-app/components/Navigation";
import HomePage from "@/react-app/pages/Home";
import About from "@/react-app/pages/About";
import Services from "@/react-app/pages/Services";
import Trainers from "@/react-app/pages/Trainers";
import Pricing from "@/react-app/pages/Pricing";
import Reviews from "@/react-app/pages/Reviews";
import Contact from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="fitness-gradient min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
