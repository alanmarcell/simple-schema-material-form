const validateDoc = ({
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

const validateField = ({
  schema, doc = {}, addError, fieldName,
}) => {
  if (!schema) {
    return true;
  }

  const validationContext = schema.newContext();
  const validation = validationContext.validate(doc, { keys: [fieldName] });

  const docErrors = validationContext.validationErrors();
  addError(docErrors, fieldName);
  return validation;
};

export { validateField };
export default validateDoc;
