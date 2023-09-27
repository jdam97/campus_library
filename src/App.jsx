import { Home } from "./components/pages/Home";
import { SignIn } from "./components/pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/signUp" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
  )
}

export default App
