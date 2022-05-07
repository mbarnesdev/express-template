const postUser = (req, res) => {
	res.status(200).json({ action: 'CREATE USER ROUTE' });
};

module.exports = postUser;
