const mysql=require('mysql2');
const pool=mysql.createPool({
    host : '127.0.0.1',
    user:'root',
    password:'kshekhar123',
    database:'node-complete',
});

module.exports=pool.promise();