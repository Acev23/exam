const express=require("express")
const router=express.Router();
const userController=require("../controllers/userControllers");

//exam
router.get('/users',userController.getAllUsers);
 router.get('/users/:id',userController.getUserByID);
router.post('/users',userController.createUser)
router.put('/users',userController.updateUser)
router.delete('/users',userController.deleteUser)


//endpoint
// router.get('/users',userController.getAllUsers);
// router.get('/hello',userController.hello);
//  router.get('/users/:id',userController.getUserByID);
// // router.get('/users/ip/:ip_address', userController.getUserByIP);
// // router.get('/users/ip_email/:ip_email', userController.getUserBytwo);
// router.post('/users',userController.createUser)
// router.put('/users',userController.updateUser)
// router.delete('/users',userController.deleteUser)


//possible endpoints
// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userControllers");

// // ========================================
// // GET
// // ========================================

// router.get("/users", userController.getAllUsers);

// router.get("/users/:id", userController.getUserByID);

// router.get("/users/meter/:meter_number", userController.getUserByMeter);

// router.get("/users/search/:search", userController.getUserBySearch);

// router.get("/users/pending", userController.getPendingUser);

// router.get("/users/sorted", userController.getUsersSorted);

// router.get("/users/top", userController.getTopUsers);


// // ========================================
// // POST
// // ========================================

// router.post("/users", userController.createUser);

// router.post("/users/validation", userController.createUserValidation);

// router.post("/users/calculation", userController.createUserCalculation);


// // ========================================
// // PUT
// // ========================================

// router.put("/users", userController.updateUser);

// router.put("/users/status", userController.updateStatus);


// // ========================================
// // DELETE
// // ========================================

// router.delete("/users", userController.deleteUser);

// router.delete("/users/:id", userController.deleteUserByURL);


// module.exports = router;

module.exports = router;
