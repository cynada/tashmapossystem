import express from "express";
import { isAuth, isAdmin } from "../util";
import mysqlConnection from "../mysql";

const router = express.Router();

router.post("/signin", async (req, res) => {
  try {
    var epfnumber = req.body.epfnumber;
    var password = req.body.password;

    mysqlConnection.beginTransaction((err) => {
      if (err) {
        throw err;
      }
      mysqlConnection.query(
        `CALL SignIn('${epfnumber}','${password}');`,
        (error, results, fields) => {
          if (error) {
            return mysqlConnection.rollback(() => {
              throw error;
            }); 
          }
          console.log(results);
          if (results[0][0].LoginStatus == 0) {
            res.send({ login: false });
          }
          if (results[0][0].LoginStatus == 1) {
            res.send({ login: true, isAdmin: results[0][0].IsAdmin == 1 ? true : false });
          }
        }
      );
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

export default router;
