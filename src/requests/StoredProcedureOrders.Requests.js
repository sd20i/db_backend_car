const { mysqlConnect } = require("../database/Connection");
const mysql = require('mysql2');

const newOrderStoredProcedure = async (customerId ) => {
   
    const sql = "CALL SP_NEW_ORDER(?)";

    return mysqlConnect.query(sql, [customerId], (error, results) => {
    if (error) {
        return console.error(error.message);
    }
    if(results.length > 0){
        //console.log(results[0]);
        return results[0]
    }else{
        console.log("Error! Did not create new Order.");
        console.log(results[0]);
    }
    
});
 
  };

  const getNewOrderId = async () => {
   
    const sql = "SELECT o_id FROM orders ORDER BY o_id DESC LIMIT 1";

    mysqlConnect.query(sql, (error, results) => {
    console.log("error: "+error);
    console.log("result "+results);
    return results[0].o_id;

    
        /*
        if (error) {
        return console.error(error.message);
    }
    if(results.length > 0){
        console.log(typeof results[0].o_id)
        return results[0].o_id;
    }else{
        console.log("Error! Did not create new Order.");
        console.log("Error on getNewOrder: "+results);
    }
        */
    
});
 
  };

  const newOrderItemStoredProcedure = async (productId, orderId ) => {

    const sql = "CALL SP_NEW_ORDERITEM(?,?)";
    //console.log("inside orderitems: "+orderId)

    mysqlConnect.query(sql, [productId, orderId], (error, results) => {
    if (error) {
        return console.error(error.message);
    }
    if(results.length > 0){
        //console.log(results);
        return results[0]
    }else{
        //console.log("Error! Did not create new OrderItem."+ productId);
        //console.log(results);
    }
});

  };

  
  
  
  module.exports = { newOrderStoredProcedure, newOrderItemStoredProcedure, getNewOrderId };