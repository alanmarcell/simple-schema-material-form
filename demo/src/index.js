import React from 'react';
import { render } from 'react-dom';
import SimpleSchema from 'simpl-schema';
import MaterialButton from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { merge, range } from 'ramda';
import TextInput from './TextInput';
import Radio from './Radio';

import ReactForm, { Field, Submit, ArrayField } from '../../src';

const SessionSchema = new SimpleSchema({
  required: {
    type: String,
    min: 6,
  },
  optional: {
    type: String,
    required: false,
  },

  consumption: {
    type: String,
    allowedValues: [
      'smoke',
      'vaporizer',
      'edibles',
      'drink',
      'pills',
      'spray',
      'dye',
    ],
  },
});

const getStarStyle = (i, score = 10) => {
  if (i > score) {
    return { color: 'white' };
  }

  if (i < 3) {
    return { color: 'red' };
  }

  if (i < 7) {
    return { color: 'yellow' };
  }

  return { color: 'green' };
};


const ReviewComponent = ({ fieldName, onSubmit, ...props }) => {
  const { setDoc, doc } = props;
  debugger;

  const dez = range(0, 10);

  return (
    <div>
      {dez.map((a, i) => (
        <MaterialButton
          key={a}
          size="small"
          onClick={() => setDoc(merge(doc, {
            [fieldName]: {
              ...doc[fieldName],
              score: i,
            },
          }))}
        >
          <Icon
            style={{
              fontSize: 30, position: 'absolute', zIndex: 99, ...getStarStyle(i),
            }}
          // color={i > 5 ? 'inherit' : 'action'}
          >star_rate
          </Icon>
          <Icon
            style={{ ...getStarStyle(i, doc[fieldName].score), zIndex: 100 }}
          // color={i > 5 ? 'inherit' : 'action'}
          >star_rate
          </Icon>
        </MaterialButton>
      ))
      }
    </div>

  );
};

const Demo = () => {
  const formProps = {
    schema: SessionSchema,
    onSubmit: a => console.log('>>> ON SUBMIT', a),
    onSubmitSuccess: a => console.log('>>> ON onSubmitSuccess', a),
    style: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };

  return (
    <div>
      <div>
        <h1>simple-schema-react-form Material-UI Demo </h1>
        <ReactForm {...formProps} >
          <Field fieldName="required" Component={TextInput} />
          <Field fieldName="optional" type="password" Component={TextInput} />
          <ArrayField
            fieldName="consumption"
            // selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]}
            Component={Radio}
          />

          {/* <Field fieldName="look" Component={ReviewComponent}/> */}

          <Submit Component={MaterialButton} />
        </ReactForm>
      </div>
      <div>
        <h1>simple-schema-react-form Demo </h1>
        <ReactForm {...formProps} >
          <Field type="text" fieldName="required" />
          <Field type="password" fieldName="optional" />
          {/* <Field fieldName="look" Component={ReviewComponent}/> */}


          <Submit />
        </ReactForm>
      </div>
    </div>
  );
};

render(<Demo />, document.querySelector('#demo'));
