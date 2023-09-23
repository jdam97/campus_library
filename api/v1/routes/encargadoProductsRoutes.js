import * as encargado from "../../controllers/encargadoProductsController.js";
import {validateToken} from "../../jwt/jwt.js"
import { Router } from "express";

const encargadoProducts = Router();

encargadoProducts.get("/products",validateToken,encargado.getAllproducts);


export default encargadoProducts;