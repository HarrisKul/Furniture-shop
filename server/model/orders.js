import { DataTypes } from 'sequelize'

const Orders = (sequelize) => {
    const Schema = {
        order_date: {
            type: DataTypes.DATE, 
            allowNull: false 
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }

    return sequelize.define('orders', Schema)
}

export default Orders