import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import MenuPage from "./pages/MenuPage/MenuPage.jsx";
import DevonicsTodayPage from "./pages/DevonicsTodayPage/DevonicsTodayPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/today" element={<DevonicsTodayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
