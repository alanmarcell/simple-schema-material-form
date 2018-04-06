import validateDoc from './validateForm';

const handleSubmit = ({
  buildDocToSave = doc => doc,
  buildDocToValidate = doc => doc,
  ...props
}) => {
  const docIsValid = validateDoc(buildDocToValidate(props));
  const {
    onSubmit,
  } = props;

  if (docIsValid) {
    const docToSave = buildDocToSave(props.doc);

    onSubmit(docToSave);
  }
};

export default handleSubmit;
