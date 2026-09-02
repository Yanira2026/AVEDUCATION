import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import TuitionCenter from "../pages/TuitionCenter";
import Yanira from "../pages/Yanira";
import GoldenMiracle from "../pages/GoldenMiracle";
import InstitutionDetails from "../pages/InstitutionDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/tuitioncenter" element={<TuitionCenter />} />
        <Route path="/yanira" element={<Yanira />} />
        <Route path="/play-school" element={<GoldenMiracle />} />
        <Route path="/institutions/yanira" element={<InstitutionDetails />} />
        <Route path="/tuition-center" element={<TuitionCenter />} />

      </Routes>
    </BrowserRouter>
  );
}