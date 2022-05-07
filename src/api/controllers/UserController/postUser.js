const { User } = require('../../models');

const postUser = async (req, res) => {
	const { username, password } = req.body;

	await User.create({
		username: username,
		password: password,
	})
		.then(() => {
			res.status(200).json({ action: 'Created user.' });
		})
		.catch((err) => {
			console.error(err);
			res.status(404).json({ action: 'Could not create user.' });
		});
};

module.exports = postUser;
