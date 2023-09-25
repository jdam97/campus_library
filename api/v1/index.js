import login from "./routes/loginRoutes.js"
import userProducts from "./routes/userProductsRoutes.js"
import encargadoProducts from "./routes/encargadoProductsRoutes.js"

import { Router } from "express";

const v1 = Router()

v1.use("/auth",login)
v1.use("/usuarios",userProducts)
v1.use("/encargados",encargadoProducts)



export default v1;