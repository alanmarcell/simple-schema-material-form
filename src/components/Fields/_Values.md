Values:

```jsx
props = { fieldName : 'Valuews', value: 'Initial Value' };
initialState = { value: props.value, fieldName: props.fieldName};
<div>
Lala
  <textarea
    value={state.value}
    readOnly
  />
  <TextField
    {...props}
    ref={ref =>  (props = ref)} />
  <TextField fieldName="valuew" />
</div>
```
