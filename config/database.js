import {Sequelize} from "sequelize"

const db = new Sequelize('teste','root','toor',{
    host: 'localhost',
    dialect:"mysql"
})

export default db