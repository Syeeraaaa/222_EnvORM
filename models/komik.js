module.exports = (sequelize, DataTypes) => {
     const komik = sequelize.define("Komik", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
}
