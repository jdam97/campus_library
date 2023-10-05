import login from "./routes/loginRoutes.js"
import userProducts from "./routes/userProductsRoutes.js"
import encargadoProducts from "./routes/encargadoProductsRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import { validateRol } from "../helpers/validateRol.js";
import { Router } from "express";
import { validateToken } from "../jwt/jwt.js";

const v1 = Router()

v1.use("/auth",login)
v1.use("/usuarios",validateToken,validateRol("usuario"),userProducts)
v1.use("/staff",validateToken,validateRol("encargado"),encargadoProducts)
v1.use("/admin",validateToken,validateRol("admin"),adminRoutes)


export default v1;