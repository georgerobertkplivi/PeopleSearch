module.exports = (req, res, next) => {
  const sanitzier = new RegExp(/[&\/\\#,+()$~%.'":*?<>{}]/g);

  if (!!req.query.name_like && sanitzier.test(req.query.name_like)) {
    return res.status(400).send({
      message: 'Unsupported query!',
    });
  }

  next();
};
