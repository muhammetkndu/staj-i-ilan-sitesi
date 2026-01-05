import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";
import Favorites from "./pages/Favorites";
import Jobs from "./pages/Jobs";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </div>
  )
}



  
