import { DataTypes } from 'sequelize'

const Posts = (sequelize) => {
    const Schema = {
        title: {
            type: DataTypes.STRING, 
            allowNull: false 
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sum: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
 
    }

    return sequelize.define('posts', Schema)
}

export default Posts