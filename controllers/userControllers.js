const connection=require("../config/db");


//CRUD

exports.getAllUsers=(req,res)=> {
    connection.query("SELECT * FROM `water-bills`",(err,rows,fields)=>{
        if(err) throw err;
        res.json(rows);
    }
    )
}

//get(search)
exports.getUserByID=(req,res)=> {
   const id=req.params.id;
   connection.query("SELECT * FROM `water-bills` WHERE id=?",[id ],(err, rows,fields)=>{
    if(err) throw err;
    if(rows.length>0)
        res.json(rows)
    else
        res.status(404).json ({message:"404 User not Found!"})
   })
}


//POST
exports.createUser = (req, res) => {
    console.log(req.body);
    const { meter_number, consumer_name, cubic_meters_used, total_amount, status } = req.body;
    
    // Matched the query parameters to the extracted body fields
    connection.query(
        'INSERT INTO `water-bills` (meter_number, consumer_name, cubic_meters_used, total_amount, status) VALUES (?, ?, ?, ?, ?)',
        [meter_number, consumer_name, cubic_meters_used, total_amount, status],
        (err, result) => {
            if (err) {
                console.error("Database Error:", err);
                return res.status(500).json({ error: "Failed to create bill entry" });
            }
            res.json({ message: "Water bill created successfully", id: result.insertId });
        }
    );
};

//update
exports.updateUser=(req,res)=>{
     const {id, meter_number, consumer_name, cubic_meters_used, total_amount, status } = req.body;
      connection.query('UPDATE `water-bills` SET meter_number=?, consumer_name=?, cubic_meters_used=?, total_amount=?, status=? WHERE id=?',
        [ meter_number, consumer_name, cubic_meters_used, total_amount, status, id],
        (err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0)
                res.json({message:"User updated successfully"})
            else
                res.status(404).json({message:'User Not Found'})

        })      
}

exports.deleteUser=(req,res)=>{
    const { id } = req.body;
      connection.query('DELETE FROM `water-bills` WHERE id=?',[id],(err,result)=>{
        if(err) throw err;
          if(result.affectedRows>0)
                res.json({message:"User DELETED successfully"})
            else
                res.status(404).json({message:'User Not Found'})



      })
    
}








// exports.getAllUsers=(req,res)=> {
//     connection.query("SELECT * FROM `water-bills`",(err,rows,fields)=>{
//         if(err) throw err;
//         res.json(rows);
//     }
//     )
// }

// // exports.hello=(req,res)=> {
// //     res.send("Hello World")
// // }


// // //get(search)
// // exports.getUserByID=(req,res)=> {
// //    const id=req.params.id;
// //    connection.query("SELECT * FROM `water-bills` WHERE id=?",[id ],(err, rows,fields)=>{
// //     if(err) throw err;
// //     if(rows.length>0)
// //         res.json(rows)
// //     else
// //         res.status(404).json ({message:"404 User not Found!"})
// //    })
// // }

// // exports.getUserByIP=(req,res)=> {
// //    const ip_address=req.params.ip_address;
// //    connection.query("SELECT * FROM `water-bills` WHERE ip_address=?",[ip_address],(err, rows,fields)=>{
// //     if(err) throw err;
// //     if(rows.length>0)
// //         res.json(rows)
// //     else
// //         res.status(404).json ({message:"404 User not Found!"})
// //    })
// // }


// // exports.getUserBytwo=(req,res)=> {
 
// //     const ip_email=req.params.ip_email;
// //    connection.query("SELECT * FROM `water-bills` WHERE (ip_address=? || email=?) ",[ip_email,ip_email],(err, rows,fields)=>{
// //     if(err) throw err;
// //     if(rows.length>0)
// //         res.json(rows)
// //     else
// //         res.status(404).json ({message:"404 User not Found!"})
// //    })
// // }

// //POST
// exports.createUser = (req, res) => {
//     const { meter_number, consumer_name, cubic_meters_used, total_amount, status } = req.body;
    
//     // Matched the query parameters to the extracted body fields
//     connection.query(
//         'INSERT INTO `water-bills` (meter_number, consumer_name, cubic_meters_used, total_amount, status) VALUES (?, ?, ?, ?, ?)',
//         [meter_number, consumer_name, cubic_meters_used, total_amount, status],
//         (err, result) => {
//             if (err) {
//                 console.error("Database Error:", err);
//                 return res.status(500).json({ error: "Failed to create bill entry" });
//             }
//             res.json({ message: "Water bill created successfully", id: result.insertId });
//         }
//     );
// };

// //update
// exports.updateUser=(req,res)=>{
//      const { meter_number, consumer_name, cubic_meters_used, total_amount, status } = req.body;
//       connection.query('UPDATE `water-bills` SET meter_number=?, consumer_name=?, cubic_meters_used=?, total_amount=?,ip=?, status=?',
//         [ meter_number, consumer_name, cubic_meters_used, total_amount, status],
//         (err,result)=>{
//             if(err) throw err;
//             if(result.affectedRows>0)
//                 res.json({message:"User created successfully", id:result.insertId})
//             else
//                 res.status(404).json({message:'User Not Found'})

//         })      
// }

// exports.deleteUser=(req,res)=>{
//       const id = req.body;
//       connection.query('DELETE FROM `water-bills` WHERE id=?',[id],(err,result)=>{
//         if(err) throw err;
//           if(result.affectedRows>0)
//                 res.json({message:"User DELETED successfully", id:result.insertId})
//             else
//                 res.status(404).json({message:'User Not Found'})



//       })
    
// }









// //posible questions
// const connection = require("../config/db");

// // ========================================
// // GET ALL USERS
// // ========================================

// exports.getAllUsers = (req, res) => {
//     connection.query(
//         "SELECT * FROM `water-bills`",
//         (err, rows) => {
//             if (err) throw err;

//             res.json(rows);
//         }
//     );
// };


// // ========================================
// // GET USER BY ID
// // URL: /api/users/1
// // ========================================

// exports.getUserByID = (req, res) => {
//     const id = req.params.id;

//     connection.query(
//         "SELECT * FROM `water-bills` WHERE id=?",
//         [id],
//         (err, rows) => {
//             if (err) throw err;

//             if (rows.length > 0) {
//                 res.json(rows);
//             } else {
//                 res.status(404).json({
//                     message: "User not Found"
//                 });
//             }
//         }
//     );
// };


// // ========================================
// // GET USER BY METER NUMBER
// // URL: /api/users/meter/WA-10001
// // ========================================

// exports.getUserByMeter = (req, res) => {
//     const meter_number = req.params.meter_number;

//     connection.query(
//         "SELECT * FROM `water-bills` WHERE meter_number=?",
//         [meter_number],
//         (err, rows) => {
//             if (err) throw err;

//             if (rows.length > 0) {
//                 res.json(rows);
//             } else {
//                 res.status(404).json({
//                     message: "User not Found"
//                 });
//             }
//         }
//     );
// };


// // ========================================
// // GET USER BY SEARCH
// // Searches meter_number OR consumer_name
// // URL: /api/users/search/Juan
// // ========================================

// exports.getUserBySearch = (req, res) => {
//     const search = req.params.search;

//     connection.query(
//         "SELECT * FROM `water-bills` WHERE meter_number=? OR consumer_name=?",
//         [search, search],
//         (err, rows) => {
//             if (err) throw err;

//             if (rows.length > 0) {
//                 res.json(rows);
//             } else {
//                 res.status(404).json({
//                     message: "User not Found"
//                 });
//             }
//         }
//     );
// };


// // ========================================
// // GET USERS WITH AND CONDITION
// // Pending AND usage greater than 20
// // ========================================

// exports.getPendingUser = (req, res) => {
//     connection.query(
//         "SELECT * FROM `water-bills` WHERE status=? AND cubic_meters_used>?",
//         ["Pending", 20],
//         (err, rows) => {
//             if (err) throw err;

//             res.json(rows);
//         }
//     );
// };


// // ========================================
// // GET USERS SORTED
// // Highest total amount first
// // ========================================

// exports.getUsersSorted = (req, res) => {
//     connection.query(
//         "SELECT * FROM `water-bills` ORDER BY total_amount DESC",
//         (err, rows) => {
//             if (err) throw err;

//             res.json(rows);
//         }
//     );
// };


// // ========================================
// // GET TOP 5 USERS
// // ========================================

// exports.getTopUsers = (req, res) => {
//     connection.query(
//         "SELECT * FROM `water-bills` ORDER BY total_amount DESC LIMIT 5",
//         (err, rows) => {
//             if (err) throw err;

//             res.json(rows);
//         }
//     );
// };


// // ========================================
// // POST
// // CREATE USER
// // ========================================

// exports.createUser = (req, res) => {

//     const {
//         meter_number,
//         consumer_name,
//         cubic_meters_used,
//         total_amount,
//         status
//     } = req.body;

//     connection.query(
//         "INSERT INTO `water-bills` (meter_number, consumer_name, cubic_meters_used, total_amount, status) VALUES (?, ?, ?, ?, ?)",
//         [
//             meter_number,
//             consumer_name,
//             cubic_meters_used,
//             total_amount,
//             status
//         ],
//         (err, result) => {

//             if (err) throw err;

//             res.json({
//                 message: "User created successfully",
//                 id: result.insertId
//             });
//         }
//     );
// };


// // ========================================
// // POST WITH VALIDATION
// // ========================================

// exports.createUserValidation = (req, res) => {

//     const {
//         meter_number,
//         consumer_name,
//         cubic_meters_used,
//         total_amount,
//         status
//     } = req.body;


//     if (!meter_number || !consumer_name) {

//         return res.status(400).json({
//             message: "Missing required fields"
//         });

//     }


//     connection.query(
//         "INSERT INTO `water-bills` (meter_number, consumer_name, cubic_meters_used, total_amount, status) VALUES (?, ?, ?, ?, ?)",
//         [
//             meter_number,
//             consumer_name,
//             cubic_meters_used,
//             total_amount,
//             status
//         ],
//         (err, result) => {

//             if (err) throw err;

//             res.json({
//                 message: "User created successfully",
//                 id: result.insertId
//             });
//         }
//     );
// };


// // ========================================
// // POST WITH CALCULATION
// // total_amount = cubic_meters_used * 25
// // ========================================

// exports.createUserCalculation = (req, res) => {

//     const {
//         meter_number,
//         consumer_name,
//         cubic_meters_used,
//         status
//     } = req.body;


//     const total_amount = cubic_meters_used * 25;


//     connection.query(
//         "INSERT INTO `water-bills` (meter_number, consumer_name, cubic_meters_used, total_amount, status) VALUES (?, ?, ?, ?, ?)",
//         [
//             meter_number,
//             consumer_name,
//             cubic_meters_used,
//             total_amount,
//             status
//         ],
//         (err, result) => {

//             if (err) throw err;

//             res.json({
//                 message: "User created successfully",
//                 id: result.insertId,
//                 total_amount: total_amount
//             });
//         }
//     );
// };


// // ========================================
// // PUT
// // UPDATE ALL FIELDS
// // ========================================

// exports.updateUser = (req, res) => {

//     const {
//         id,
//         meter_number,
//         consumer_name,
//         cubic_meters_used,
//         total_amount,
//         status
//     } = req.body;


//     connection.query(
//         "UPDATE `water-bills` SET meter_number=?, consumer_name=?, cubic_meters_used=?, total_amount=?, status=? WHERE id=?",
//         [
//             meter_number,
//             consumer_name,
//             cubic_meters_used,
//             total_amount,
//             status,
//             id
//         ],
//         (err, result) => {

//             if (err) throw err;

//             if (result.affectedRows > 0) {

//                 res.json({
//                     message: "User updated successfully"
//                 });

//             } else {

//                 res.status(404).json({
//                     message: "User Not Found"
//                 });

//             }
//         }
//     );
// };


// // ========================================
// // PUT
// // UPDATE ONLY STATUS
// // ========================================

// exports.updateStatus = (req, res) => {

//     const {
//         id,
//         status
//     } = req.body;


//     connection.query(
//         "UPDATE `water-bills` SET status=? WHERE id=?",
//         [
//             status,
//             id
//         ],
//         (err, result) => {

//             if (err) throw err;

//             if (result.affectedRows > 0) {

//                 res.json({
//                     message: "Status updated successfully"
//                 });

//             } else {

//                 res.status(404).json({
//                     message: "User Not Found"
//                 });

//             }
//         }
//     );
// };


// // ========================================
// // DELETE BY ID FROM BODY
// // ========================================

// exports.deleteUser = (req, res) => {

//     const {
//         id
//     } = req.body;


//     connection.query(
//         "DELETE FROM `water-bills` WHERE id=?",
//         [id],
//         (err, result) => {

//             if (err) throw err;

//             if (result.affectedRows > 0) {

//                 res.json({
//                     message: "User deleted successfully"
//                 });

//             } else {

//                 res.status(404).json({
//                     message: "User Not Found"
//                 });

//             }
//         }
//     );
// };


// // ========================================
// // DELETE BY ID FROM URL
// // URL: /api/users/7
// // ========================================

// exports.deleteUserByURL = (req, res) => {

//     const id = req.params.id;


//     connection.query(
//         "DELETE FROM `water-bills` WHERE id=?",
//         [id],
//         (err, result) => {

//             if (err) throw err;

//             if (result.affectedRows > 0) {

//                 res.json({
//                     message: "User deleted successfully"
//                 });

//             } else {

//                 res.status(404).json({
//                     message: "User Not Found"
//                 });

//             }
//         }
//     );
// };

