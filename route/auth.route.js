import { Router } from "express";
import auth from "../controller/auth.controller.js"

const router = Router();




//login 
router.get('/login',auth.login)


//signup
router.post('/signup',auth.signup)




export default router;