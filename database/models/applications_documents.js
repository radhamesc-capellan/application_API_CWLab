"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ApplicationsDocuments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      //association
      ApplicationsDocuments.belongsTo(models.Applications, {
        as: "application",
        foreignKey: "application_id",
      });

    }
  }
  ApplicationsDocuments.init(
    {
      application_id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey:true,
      },
      url: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      order: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "ApplicationsDocuments",
      tableName: "applications_documents",
      underscored: true,
      timestamps: true,
    }
  );
  return ApplicationsDocuments;
};
