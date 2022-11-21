import { Sequelize } from 'sequelize'
import mysql from 'mysql2/promise'
import {Posts, Users, Orders} from '../model/index.js'



const database = {} 
const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Furniture'
}

try {
    const connection = await mysql.createConnection({
        host: credentials.host,
        user: credentials.user,
        password: credentials.password
    })

    await connection.query('CREATE DATABASE IF NOT EXISTS ' + credentials.database)

    const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password, { dialect: 'mysql'})

    database.Users = Users(sequelize)
    database.Posts = Posts(sequelize)
    database.Orders = Orders(sequelize)

    database.Users.hasOne(database.Orders)
    database.Orders.belongsTo(database.Users)

    database.Posts.hasOne(database.Orders)
    database.Orders.belongsTo(database.Posts)


    await sequelize.sync({ alter: true })
} catch(error) {
    console.log(error)
    console.log('Error connecting to database');
}

export default database