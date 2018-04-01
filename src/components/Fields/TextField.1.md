# TextField With Recompose

```jsx
props = { fieldName : 'alan', value: 'Initial Value' };
initialState = { value: props.value, fieldName: props.fieldName};
const enhance = Component => eprops => {

  console.log('enhance PROPS', props);
  return <Component {...props} error />
};
const FieldComponent = fieldProps => {
  console.log('FIELD PROPS', fieldProps);
  return (<div>
  <textarea
    value={state.value}
    readOnly
  />
  <TextField
    {...props}
    onChange={e => { setState({value: e.target.value}); props.updateStateValue(e.target.value)}}
    ref={ref =>  (props = ref)} />
  <TextField fieldName="thais" />
</div>)};
const EFieldCompoent = enhance(FieldComponent);
;<EFieldCompoent />
```
