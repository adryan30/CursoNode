import { Model, DataTypes } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: DataTypes.STRING,
        password: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Repo, {
      onDelete: "CASCADE",
      foreignKey: "user_id",
      as: "repos"
    });
  }
}

export default User;
