import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import WeatherResponse from "./components/weather-response";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/response" exact element={<WeatherResponse />} />
      </Routes>
    </Router>
  );
}

export default App;
