import * as usuarioLogin from "../../controllers/login.js";
import { Router } from "express";
import {limitRequestLogin} from "../../helpers/ratelimit.js"
// import {vSchema} from "../../helpers/validationSchema.js"
const login = Router();

login.use(limitRequestLogin)

login.post("/signIn",usuarioLogin.signIn)
login.post("/signUp",usuarioLogin.signUp)


export default login;