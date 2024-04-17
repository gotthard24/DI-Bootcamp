// const accessCors = ((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'localhost:5001');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
//     res.setHeader('Access-Control-Allow-Credentials', true); 
//     if (req.method === 'OPTIONS') {
//         return res.sendStatus(200);
//     }
//     next(); 
// });

// module.exports = {
//     accessCors,
// }