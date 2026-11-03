module.exports = (sequelize, DataTypes) => {
  const komik = sequelize.define('komik', {
    id: {
      type: DataTypes.INTEGER,
      aoutoIncrement: true,
      primaryKey: true
    },
    titel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    