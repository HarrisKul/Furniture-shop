import { DataTypes } from 'sequelize'

const Users = (sequelize) => {
    const Schema = {
        first_name: {
            type: DataTypes.STRING, //=VARCHAR(255)
            allowNull: false //neleidžiamas tuščias laukas - Standartinė reikšmė true
        },
        last_name: {
            type: DataTypes.STRING, //=VARCHAR(255)
            allowNull: false //neleidžiamas tuščias laukas - Standartinė reikšmė true
        },
        email: {
            type: DataTypes.STRING, //= TEXT
            allowNull: false
        },
        password: {
            type: DataTypes.STRING, //= TEXT
            allowNull: false
        },
        role: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }    
    }

    return sequelize.define('users', Schema)
}

export default Users