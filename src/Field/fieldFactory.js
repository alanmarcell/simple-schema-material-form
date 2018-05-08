import { pathOr } from 'ramda';
import { compose, pure, setDisplayName, mapProps } from 'recompose';

const enhance = compose(
  setDisplayName('Field'),
  pure,
  mapProps(({
    fieldName, doc, setDoc, ...props
  }) => ({
    label: fieldName,
    fieldName,
    value: pathOr('', [fieldName], doc),
    onChange: e => setDoc({ [fieldName]: e.target.value }),
    ...props,
  })),
);


export default enhance;
