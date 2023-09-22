import login from "./routes/loginRoutes.js"
import { Router } from "express";

const v1 = Router()

v1.use("/auth",login)

export default v1;