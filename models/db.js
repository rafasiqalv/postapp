const Sequelize = require('sequelize');
//Conexao com o banco de dados
const sequelize = new Sequelize('postapp','root','root',{
    host:"localhost",
    port:"3306",
    dialect:"mysql"
});

//Vamos exportar as variáveis
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}