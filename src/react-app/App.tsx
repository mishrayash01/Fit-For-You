import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "@/react-app/components/Layout";
import Home from "@/react-app/pages/Home";
import About from "@/react-app/pages/About";
import Services from "@/react-app/pages/Services";
import Pricing from "@/react-app/pages/Pricing";
import Reviews from "@/react-app/pages/Reviews";
import Contact from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
