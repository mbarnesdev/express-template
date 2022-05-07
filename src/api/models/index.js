const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const db = {};

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USR,
	process.env.DB_PWD,
	{ host: process.env.DB_HOST, dialect: process.env.DB_DIALECT }
);

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf('.') !== 0 &&
			file !== basename &&
			file.slice(-3) === '.js'
		);
	})
	.forEach((file) => {
		let model = require(path.join(__dirname, file))(sequelize, DataTypes);
		db[model.name] = model;
	});

db.sequelize = sequelize;

module.exports = db;
