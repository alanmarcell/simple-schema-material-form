# TextField With Recompose:

```jsx
const Values = require('./Values').default;
props = { fieldName : 'alan', value: 'Initial Value' };
initialState = { value: props.value, fieldName: props.fieldName};
<div>
  <Values {...state} />
  <TextInput
    {...props}
    onChange={e => { setState({value: e.target.value}); props.updateStateValue(e.target.value)}}
    ref={ref =>  (props = ref)} />
  <TextInput fieldName="thais" />
</div>
```
