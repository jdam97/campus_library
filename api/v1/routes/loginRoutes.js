import * as usuarioLogin from "../../controllers/login.js";
import { Router } from "express";
import {limitRequestLogin} from "../../helpers/ratelimit.js";
import  validarLogin  from "../../middlewares/loginValidation.js";
const login = Router();

login.use(limitRequestLogin())

login.post("/signIn",usuarioLogin.signIn)
login.post("/signUp",validarLogin,usuarioLogin.signUp)

export default login;