const Sequelize = require('sequelize');
//Conexao com o banco de dados
const sequelize = new Sequelize('sql10614853','sql10614853','mfcAXCWr4n',{
    host:"sql10.freemysqlhosting.net",
    port:"3306",
    dialect:"mysql"
});

//Vamos exportar as variáveis
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
