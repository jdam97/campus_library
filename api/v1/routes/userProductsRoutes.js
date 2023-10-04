import * as products from "../../controllers/usersProductsController.js";
import { Router } from "express";
import {limitRequest} from "../../helpers/ratelimit.js";


const userProducts = Router();

userProducts.get("/disponibles",products.getProducts);
userProducts.post("/booking",limitRequest(),products.postBooking)
userProducts.delete("/booking",limitRequest(),products.deleteBooking)

export default userProducts;