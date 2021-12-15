'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comment.belongsTo(models.user)
      models.comeent.belongsTo(models.thread)
    }
  };
  comment.init({
    desciption: {
      type: DataTypes.STRING, allowNull: false, 
      validate: {
        notNull: true
      }
    },
    userId: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        notNull: true
      }
    },
    threadId: {
      type: DataTypes.INTEGER, allowNull: false, 
      validate: {
        notNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};