import { Login } from "./components/pages/Login";
import { SignUp } from "./components/pages/SignUp";
import {Users} from "./components/pages/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/users" element={<Users/>}/>
    </Routes>
  </Router>
  )
}

export default App
