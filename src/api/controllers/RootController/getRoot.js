const getRoot = (req, res) => {
	res.status(200).send({ action: 'READ ROOT' });
};

module.exports = getRoot;
