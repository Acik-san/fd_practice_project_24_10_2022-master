'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Contest extends Model {
    static associate (models) {
      Contest.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'id' })
      Contest.hasMany(models.Offer, {
        foreignKey: 'contestId',
        targetKey: 'id'
      })
    }
  }
  Contest.init(
    {
      orderId: {
        allowNull: false,
        type: DataTypes.STRING
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      contestType: {
        allowNull: false,
        type: DataTypes.ENUM('name', 'tagline', 'logo')
      },
      fileName: {
        type: DataTypes.STRING
      },
      originalFileName: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      typeOfName: {
        type: DataTypes.STRING
      },
      industry: {
        type: DataTypes.STRING
      },
      focusOfWork: {
        type: DataTypes.TEXT
      },
      targetCustomer: {
        type: DataTypes.TEXT
      },
      styleName: {
        type: DataTypes.STRING
      },
      nameVenture: {
        type: DataTypes.STRING
      },
      typeOfTagline: {
        type: DataTypes.STRING
      },
      brandStyle: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      prize: {
        allowNull: false,
        type: DataTypes.DECIMAL
      },
      priority: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Contest',
      timestamps: false
    }
  )
  return Contest
}
