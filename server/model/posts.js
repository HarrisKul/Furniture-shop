import { DataTypes } from 'sequelize'

const Posts = (sequelize) => {
    const Schema = {
        name: {
            type: DataTypes.STRING, 
            allowNull: false 
        },
        description: {
            type: DataTypes.STRING, 
            allowNull: false 
        },
        photo: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2), 
            allowNull: false
        }
    }

    return sequelize.define('posts', Schema)
}

export default Posts