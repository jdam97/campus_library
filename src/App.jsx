import { Login } from "./components/pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      
    </Routes>
  </Router>
  )
}

export default App
