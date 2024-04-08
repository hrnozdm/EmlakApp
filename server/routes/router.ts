import {Router} from "express";
import AuthController from "../controller/AuthController";


const router=Router();

//!AuthController
router.post('/register',AuthController.register);
router.post('/login',AuthController.login);
router.post('/logout',AuthController.logOut);


export default router;