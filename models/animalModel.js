import {Sequelize} from "sequelize"
import db from "../config/database.js"

const {DataTypes} = Sequelize;
const animal = db.define('AnimaisAdocoes',{
    nome: DataTypes.STRING,
    url: DataTypes.STRING,
    especie: DataTypes.STRING,
    sexoDoBichinho: DataTypes.STRING,
    idade: DataTypes.STRING,
    telefone: DataTypes.STRING,
    porte: DataTypes.STRING,
    estado: DataTypes.STRING,
    descrição: DataTypes.STRING,
    cidade: DataTypes.STRING,
    imagem: DataTypes.STRING,
    

}, {
    freezeTableName: true
})
export default animal;
(async() =>{
    await db.sync();
})()