import { Home } from "./components/pages/Home";
import { SignIn } from "./components/pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
  )
}

export default App
