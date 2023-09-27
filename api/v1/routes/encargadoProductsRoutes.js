import * as encargado from "../../controllers/encargadoProductsController.js";
import { Router } from "express";
import { limitRequest } from "../../helpers/ratelimit.js";


const encargadoProducts = Router();
encargadoProducts.use(limitRequest());

encargadoProducts.get("/productos",encargado.getAllproducts);
encargadoProducts.post("/productos",encargado.createProduct);
encargadoProducts.put("/productos",encargado.updateProduct);


export default encargadoProducts;