import * as products from "../../controllers/usersProductsController.js";
import { Router } from "express";
import {limitRequest} from "../../helpers/ratelimit.js";


const userProducts = Router();
userProducts.use(limitRequest())

userProducts.get("/disponibles",products.getProducts);

export default userProducts;