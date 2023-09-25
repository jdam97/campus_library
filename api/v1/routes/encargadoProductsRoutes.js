import * as encargado from "../../controllers/encargadoProductsController.js";
import {validateToken} from "../../jwt/jwt.js"
import { Router } from "express";
import { limitRequest } from "../../helpers/ratelimit.js";

const encargadoProducts = Router();
encargadoProducts.use(limitRequest());

encargadoProducts.get("/productos",validateToken,encargado.getAllproducts);
encargadoProducts.post("/productos",validateToken,encargado.createProduct);
encargadoProducts.put("/productos",validateToken,encargado.updateProduct);


export default encargadoProducts;