import login from "./routes/loginRoutes.js"
import userProducts from "./routes/userProductsRoutes.js"

import { Router } from "express";

const v1 = Router()

v1.use("/auth",login)
v1.use("/users",userProducts)



export default v1;