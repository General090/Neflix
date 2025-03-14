import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Component/Home.jsx";
import Trending from "./Component/Trending.jsx";
import Reasons from "./Component/Reasons.jsx";
import Questions from "./Component/Questions.jsx";
import Footer from "./Component/Footer.jsx";
import SignIn from "./Component/SignIn.jsx"; // Import SignIn page

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/signin" element={<SignIn />} /> {/* Sign-In Route */}
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
