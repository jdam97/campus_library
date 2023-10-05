import { Auth } from "./components/Auth"; //Auth es mi middleware que no me permite entrar si no tengo el token de verificacion
import { Login } from "./components/pages/Login";
import { SignUp } from "./components/pages/SignUp";
import {Users} from "./components/pages/Users";
import { Admin } from "./components/pages/Admin";
import { Staff } from "./components/pages/Staff";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/users" element={<Auth> <Users/> </Auth>}/>
      <Route path="/admin" element={<Auth> <Admin/> </Auth>} />
      <Route path="/staff" element= {<Auth> <Staff/> </Auth> } />
    </Routes>
  </Router>
  )
}

export default App
