import { merge, has, all } from 'ramda';

const selectOptionsLabelFactory = ({ selectProps }) => {

  return selectProps.map(({ label, key }) => {

    return {
      label,
      key,
    };
  });
};

const selectOptionsFactory = ({ schema, fieldName }) => {
  const allowedValues =
    schema.get(`${fieldName}`, 'allowedValues') ||
    schema.get(`${fieldName}.$`, 'allowedValues');

  const selectProps = allowedValues.map(key => ({ key, label: key }));

  const selectOptions = selectOptionsLabelFactory({ selectProps });
  return selectOptions;
};
const WithSelectFactory = ({
  handleDoc,
  schema,
  fieldName,
  i18nScope,
  selectOptions,
  ...props
}) => {
  debugger
  const res = merge(
    {
      name: fieldName,
      selectOptions:
        selectOptions ?
          all(has('label'))(selectOptions) ? selectOptions :
            selectOptionsLabelFactory({ selectProps: selectOptions, fieldName }) :
          selectOptionsFactory({ schema, fieldName }),
      handleChange: handleDoc,
    },
    props,
  );

  return res;
};

export default WithSelectFactory;
export { selectOptionsFactory };
