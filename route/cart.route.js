import { Router } from "express";
import JWTverify from "../middleware/JWTverify";

const router = Router();

router.use(JWTverify());


//send all cart items
router.get(('/',(req,res)=>{

}))

//create a new cart item
router.post('/',(req,res)=>{

})


//update cart item with given id
router.put('/:id',(req,res)=>{

})


//delete cart item with given id
router.delete('/:id', (req,res)=>{

})




export default router;