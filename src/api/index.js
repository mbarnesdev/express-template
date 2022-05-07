require('dotenv').config({ path: `${__dirname}/../config/.env` });
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/RootRouter'));
app.use('/users', require('./routes/UserRouter'));

db.sequelize
	.sync()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`http://localhost:${PORT}/`);
		});
	})
	.catch((err) => {
		console.error(err);
	});
