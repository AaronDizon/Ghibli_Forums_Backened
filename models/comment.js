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
    }
  };
  comment.init({
    desciption: {
      type: DataTypes.STRING, allnowNull: false, 
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
    postId: {
      type: DataTypes.INTEGER, allowNull: false, 
      validate: {
        notNull
      }
    }
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};