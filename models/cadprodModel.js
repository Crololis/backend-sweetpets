import {Sequelize} from "sequelize"
import db from "../config/database.js"

const {DataTypes} = Sequelize;
const prod = db.define('cadProd',{
   
    nome_produto: DataTypes.STRING,
    url: DataTypes.STRING,
    imagem: DataTypes.STRING,
    categoria: DataTypes.STRING,
    tamanho: DataTypes.STRING,
    selo_produto: DataTypes.STRING,
    file_produto: DataTypes.STRING,
    preco_produto: DataTypes.STRING,
    material_produto: DataTypes.STRING,
    durabilidade_produto: DataTypes.STRING

}, {
    freezeTableName: true
})
export default prod;
(async() =>{
    await db.sync();
})()