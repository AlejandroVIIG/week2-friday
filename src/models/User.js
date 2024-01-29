const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const User = sequelize.define("user", {
    firstName: {
        type: DataTypes.STRING,
        field: "first_name",
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        field: "last_name",
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
});

module.exports = User;