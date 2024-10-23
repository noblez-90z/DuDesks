import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomeComponent/HomePage";
import PrivacyPolicy from "./HomeComponent/PrivacyPolicy";
import Terms from "./HomeComponent/Terms";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Terms" element={<Terms />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
