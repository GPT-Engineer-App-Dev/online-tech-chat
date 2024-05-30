import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index authenticated={authenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;
