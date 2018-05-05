import validateSubmit from './validateSubmit';

const handleSubmit = ({
  buildDocToSave = doc => doc,
  buildDocToValidate = doc => doc,
  ...props
}) => {
  const docIsValid = validateSubmit(buildDocToValidate(props));
  const {
    onSubmit,
  } = props;

  if (docIsValid) {
    const docToSave = buildDocToSave(props.doc);

    onSubmit(docToSave);
  }
};

export default handleSubmit;
