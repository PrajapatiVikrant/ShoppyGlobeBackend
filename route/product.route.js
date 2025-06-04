import { Router } from "express";
import JWTverify from "../middleware/JWTverify.js";
import product from "../controller/product.controller.js"

const router = Router();

router.use(JWTverify);


//send all products
router.get('/',product.read)


//send specific product with given id
router.get('/:id',product.readOne)

//create a new products
router.post('/',product.create)


//update product with given id
router.put('/:id',product.update)


//delete product with given id
router.delete('/:id', product.delete)




export default router;