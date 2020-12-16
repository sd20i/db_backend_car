const { mysqlConnect } = require("../database/Connection");

const newOrderStoredProcedure = async (customerId ) => {
   
    const sql = "CALL SP_NEW_ORDER(?)";

    mysqlConnect.query(sql, customerId, (error, results) => {
    if (error) {
        return console.error(error.message);
    }
    
    });
 
  };

  const getNewOrderId = async () => {
   
    const sql = "SELECT o_id FROM orders ORDER BY o_id DESC LIMIT 1";
    
    return mysqlConnect.promise().query(sql)
    .then(([ rows,fields ]) => {
        
        return rows[0].o_id ;
    }).catch(console.log)
    
  };

  const newOrderItemStoredProcedure = async (productId, orderId ) => {

    const sql = "CALL SP_NEW_ORDERITEM(?,?)";

    mysqlConnect.query(sql, [productId, orderId], (error, results) => {
    
        if (error) return console.error(error.message);
        
    });

  };

  
  const purchaseStoredProcedure = async (orderId) => {

    const sql = "return_total_order_price(?,?)";

    mysqlConnect.query(sql, [orderId, total], (error, results) => {
    
        if (error) return console.error(error.message);
        
    });

  };
  
  module.exports = { newOrderStoredProcedure, newOrderItemStoredProcedure, getNewOrderId };