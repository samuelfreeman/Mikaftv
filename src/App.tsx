import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router'

import { AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress"; // Import ShadCN progress bar

import "./index.css";
import Home from "./Pages/Home";
import CommingSoon from "./Pages/CommingSoon";
import Programes from "./Pages/Programes";
import About from "./Pages/About";
import TermsAndConditions from "./Pages/components/TermsandConditions";
import PrivacyPolicy from "./Pages/components/PrivacyPolicy";

const Application: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 20 : 100));
    }, 400);

    setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[100vh] w-full bg-gray-100">
        <img src="/logo.png" alt="Logo" className="w-52 h-52 -mt-10  mb-4" />
        <Progress value={progress} className="w-1/2 bg-[#681FA3]" />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/comingsoon" element={<CommingSoon />} />
        <Route path="/programmes" element={<Programes />} />
        <Route path="/about" element={<About />} />
        <Route path = "/termsandconditions" element={<TermsAndConditions/>} />
        <Route path = "/privacypolicy" element={<PrivacyPolicy/>} />
      </Routes>
    </AnimatePresence>
  );
};

 




const App = () => {
  return (
    <Router>
      <div>
        <Application />
      </div>
    </Router>
  )
}

export default App
