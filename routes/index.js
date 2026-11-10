const express=require("express")
const router=express.Router();
const userController=require("../controllers/userControllers");
//endpoint
// router.get('/users',userController.getAllUsers);
// router.get('/hello',userController.hello);
//  router.get('/users/:id',userController.getUserByID);
// // router.get('/users/ip/:ip_address', userController.getUserByIP);
// // router.get('/users/ip_email/:ip_email', userController.getUserBytwo);
// router.post('/users',userController.createUser)
// router.put('/users',userController.updateUser)
// router.delete('/users',userController.deleteUser)

//exam
router.get('/users',userController.getAllUsers);
 router.get('/users/:id',userController.getUserByID);
router.post('/users',userController.createUser)
router.put('/users',userController.updateUser)
router.delete('/users',userController.deleteUser)

module.exports = router;