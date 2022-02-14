"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  UserHistory.init(
    {
      fullname: DataTypes.STRING,
      have_won: DataTypes.INTEGER,
      have_lost: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserHistory",
    }
  );
  return UserHistory;
};
