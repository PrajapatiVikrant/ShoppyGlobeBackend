import { Router } from "express";
import JWTverify from "../middleware/JWTverify";

const router = Router();

router.use(JWTverify());


//send all products
router.get(('/',(req,res)=>{

}))


//send specific product with given id
router.get('/:id',(req,res)=>{

})

//create a new products
router.post('/',(req,res)=>{

})


//update product with given id
router.put('/:id',(req,res)=>{

})


//delete product with given id
router.delete('/:id', (req,res)=>{

})




export default router;