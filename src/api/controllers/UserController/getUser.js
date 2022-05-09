const { User } = require('../../models');

const getUser = async (req, res) => {
	const username = req.query.username;

	const foundUser = await User.findOne({ where: { username: username } });
	if (foundUser === null) {
		res.status(404).json({ password: 'No user found.' });
	} else {
		res.status(200).json({ password: foundUser.password });
	}
};

module.exports = getUser;
