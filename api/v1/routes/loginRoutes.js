import * as usuarioLogin from "../../controllers/login.js";
import { Router } from "express";
import {limitRequestLogin} from "../../helpers/ratelimit.js";
import  {validarSignUp,validarSignIn}  from "../../middlewares/loginValidation.js";
const login = Router();

login.use(limitRequestLogin())

login.post("/signIn",validarSignIn,usuarioLogin.signIn)
login.post("/signUp",validarSignUp,usuarioLogin.signUp)

export default login;