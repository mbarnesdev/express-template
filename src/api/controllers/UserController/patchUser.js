const { User } = require('../../models');

const patchUser = async (req, res) => {
	const { username, newPassword } = req.body;

	await User.update(
		{ password: newPassword },
		{ where: { username: username } }
	)
		.then(() => {
			res.status(200).send();
		})
		.catch((err) => {
			console.error(err);
			res.status(404).send();
		});
};

module.exports = patchUser;
