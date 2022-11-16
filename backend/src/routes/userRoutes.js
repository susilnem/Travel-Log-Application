import express from 'express'
import UserController from '../controllers/userController.js'
import validateToken from '../middleware/validateToken.js';

const router = express.Router()
const userController= new UserController();

router.post('/signup',userController.addUser);
router.post('/login',userController.loginUser);
router.get('/',validateToken,userController.getAllUsers);
router.get('/:id',validateToken,userController.getSingleUser);
router.put('/update/:id',validateToken,userController.updateUser);
router.delete('/delete/:id',validateToken,userController.deleteUser);

export default router;