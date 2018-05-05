import { merge } from 'ramda';

const validateField = ({
  schema, doc = {}, addError, fieldName,
}) => {
  if (!schema) {
    return true;
  }

  const validationContext = schema.newContext();
  const validation = validationContext.validate(doc, { keys: [fieldName] });

  const docErrors = validationContext.validationErrors();

  const errs = docErrors.map((err) => merge(err, {
    message: validationContext.keyErrorMessage(err.name),
  }));

  addError(errs, fieldName);
  return validation;
};

export default validateField;
