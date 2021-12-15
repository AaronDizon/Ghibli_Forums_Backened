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
      models.comment.belongsTo(models.thread)
    }
  };
  comment.init({
    description: {
      type: DataTypes.STRING, allowNull: false, 
      validate: {
        notNull: true
      }
    },
    userId: DataTypes.INTEGER,
    threadId: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};