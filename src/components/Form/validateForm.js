const validateDoc = ({ schema, doc = {}, setErrors }) => {
  if (!schema) {
    return true;
  }

  const validationContext = schema.newContext();
  const validation = validationContext.validate(doc);

  const docErrors = validationContext.validationErrors();
  setErrors({ ...docErrors, submitAttempt: true });
  return validation;
};

export default validateDoc;
