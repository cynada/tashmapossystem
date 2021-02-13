import mysql from 'mysql';

const mysqlConnection  = mysql.createConnection({
    host            : 'localhost',
    user            : 'root',
    password        : 'Abcd@1234',
    database        : 'tashmapossystemdb',
    insecureAuth : true
  });
//   mysqlConnection
//     .connect((error) => {
//       if(!error) {console.log("DB connection succeeded");}
//       else {console.log(`DB connection failed \n Error: ` + JSON.stringify(error, undefined, 2))}
//     })
export default mysqlConnection;