import * as usuarioLogin from "../../controllers/login.js";
import { Router } from "express";

const login = Router();

login.post("/signIn",usuarioLogin.signIn)
login.post("/signUp")


export default login;