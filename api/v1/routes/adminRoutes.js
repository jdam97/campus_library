import * as loginStaff from "../../controllers/adminControllers.js"
import { Router } from "express";
import  {validarSignUp}  from "../../middlewares/loginValidation.js";
import { limitRequest } from "../../helpers/ratelimit.js";

const admin = Router();

admin.get("/",loginStaff.getAllStaff)
admin.post("/signUpStaff",limitRequest(),validarSignUp,loginStaff.signUpStaff)

export default admin;
