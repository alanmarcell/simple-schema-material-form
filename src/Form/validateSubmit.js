const validateSubmit = ({
  schema, doc = {}, setErrors,
}) => {
  if (!schema) {
    return true;
  }

  const validationContext = schema.newContext();
  const validation = validationContext.validate(doc);

  const docErrors = validationContext.validationErrors();
  setErrors(docErrors);
  return validation;
};


export default validateSubmit;
