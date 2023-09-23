import * as products from "../../controllers/usersProductsController.js";
import { Router } from "express";
import {limitRequest} from "../../helpers/ratelimit.js";
import { validateToken } from "../../jwt/jwt.js";

const userProducts = Router();
userProducts.use(limitRequest())

userProducts.get("/disponibles",validateToken,products.getProducts);

export default userProducts;