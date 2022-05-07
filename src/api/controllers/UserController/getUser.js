const getUser = (req, res) => {
	res.status(200).json({ action: 'READ USER ROUTE' });
};

module.exports = getUser;
