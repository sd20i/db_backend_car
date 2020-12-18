const { mysqlConnect } = require("../database/Connection");

const deleteProduct = async (productId ) => {
   
    const sql = "CALL getPurchasedProducts";

    const arrayProducts = await mysqlConnect.promise().query(sql)
    .then(([ rows,fields ]) => {
        
        return rows[0];
    }).catch(console.log)

    for(let product of arrayProducts){
        const prod = product.product_fk.toString();
        console.log(prod)
            console.log(productId)
        if(prod == productId){
            
            return false;
            
        }
    }

    const deleteSql = "CALL deleteProduct(?)";

    mysqlConnect.query(deleteSql, [ productId ], (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        
        });

    return true;

  };

  
  
  module.exports = { deleteProduct };