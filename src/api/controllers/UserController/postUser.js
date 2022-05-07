const { User } = require('../../models');
const bcrypt = require('bcrypt');

const postUser = async (req, res) => {
	const { username, password } = req.body;

	await bcrypt
		.hash(password, 10)
		.then((hash) => {
			User.create({
				username: username,
				password: hash,
			})
				.then(() => {
					res.status(200).json({
						success: 'true',
						username: username,
						password: hash,
					});
				})
				.catch((err) => {
					console.error(err);
					res.status(404).json({ action: 'Could not create user.' });
				});
		})
		.catch((err) => {
			console.error(err);
		});
};

module.exports = postUser;
