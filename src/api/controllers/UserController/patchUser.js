const patchUser = (req, res) => {
	res.status(200).json({ action: 'UPDATE USER ROUTE' });
};

module.exports = patchUser;
