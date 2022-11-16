import express from 'express'
import UserController from '../controllers/userController.js'
import validateToken from '../middleware/validateToken.js';

const router = express.Router()
const userController= new UserController();

router.post('/signup',userController.addUser);
router.post('/login',userController.loginUser);
router.get('/',validateToken,userController.getAllUsers);
router.get('/:id',validateToken,userController.getSingleUser);
router.put('/:id',validateToken,userController.updateUser);
router.delete('/:id',validateToken,userController.deleteUser);

// router.post('/login',user.login);

export default router;