const validateSchemaData = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    return next();
  } catch (error) {
    return res.status(400).send(error.errors.map((error) => error.message));
  }
};

module.exports = validateSchemaData;
