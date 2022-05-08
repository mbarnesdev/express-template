const { User } = require('../../models');

const deleteUser = async (req, res) => {
	const { username } = req.body;

	await User.destroy({ where: { username: username } })
		.then(() => {
			res.status(200).send();
		})
		.catch((err) => {
			console.error(err);
			res.status(404).send();
		});
};

module.exports = deleteUser;
