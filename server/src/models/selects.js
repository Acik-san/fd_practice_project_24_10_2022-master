'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Selects extends Model {
    static associate (models) {}
  }
  Selects.init(
    {
      type: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      describe: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Selects',
      timestamps: false
    }
  )
  return Selects
}
