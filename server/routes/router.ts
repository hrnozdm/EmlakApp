import {Router} from "express";
import AuthController from "../controller/AuthController";
import { verifyToken } from "../middleware/verifyToken";
import TestController from "../controller/TestController";
import UserController from "../controller/UserController";
import PosController from "../controller/PosController";


const router=Router();

//!AuthController
router.post('/register',AuthController.register);
router.post('/login',AuthController.login);
router.post('/logout',AuthController.logOut);

//!TestController
router.get('/shouldbeloggedin',verifyToken,TestController.shouldBeLoggedIn);
router.get('/shouldbeadmin',verifyToken,TestController.shouldBeAdmin);


//!UserController
router.get('/getUser/:id',verifyToken,UserController.getUser);
router.put('/userUpdate/:id',verifyToken,UserController.userUpdate);


//!PosController
router.post('/addPos',verifyToken,PosController.addPost);
router.get('/getAllPos',verifyToken,PosController.getAllPost);


export default router;