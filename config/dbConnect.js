const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("Inventory","root","Admin@123",{
    host:"localhost",
    port:3306,
    dialect:'mysql',
    logging:false
})

const dbConnection = async()=>{
    try {
        await sequelize.authenticate();
        console.log("db connect")
    } catch (error) {
        console.log(`unable to connect ${error}`);
        
    }
}

module.exports={
dbConnection,
sequelize
}