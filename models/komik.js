module.exports = (sequelize, DataTypes) => {
  const komik = sequelize.define('komik', {
    id: {
      type: DataTypes.INTEGER,
      aoutoIncrement: true,
      primaryKey: true
    },
    