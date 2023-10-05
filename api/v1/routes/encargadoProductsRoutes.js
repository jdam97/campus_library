import * as encargado from "../../controllers/encargadoProductsController.js";
import { Router } from "express";
import { limitRequest } from "../../helpers/ratelimit.js";


const encargadoProducts = Router();



encargadoProducts.get("/productos",encargado.getAllproducts);
encargadoProducts.post("/productos",limitRequest(),encargado.createProduct);
encargadoProducts.put("/productos",limitRequest(),encargado.updateProduct);
//loans
encargadoProducts.get("/",encargado.getLoansActivos);
encargadoProducts.post("/loans",encargado.postLoans);
encargadoProducts.delete("/loans",encargado.deleteBooking);
encargadoProducts.put("/loans",encargado.updateBooking);


export default encargadoProducts;