'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.thread.hasMany(models.comment)
      models.thread.belongsTo(models.user)
      models.thread.belongsTo(models.movie)
    }
  };
  thread.init({
    description: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    },
    userId: {
      type: DataTypes.INTEGER, allowNull: false,
      validate : {
        notNull: true
      }
    },
    movieId: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        notNull: true
      }
    },
  }, {
    sequelize,
    modelName: 'thread',
  });
  return thread;
};