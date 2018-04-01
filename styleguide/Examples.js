import React from 'react';
import PropTypes from 'prop-types';
import PlaygroundDefault from 'react-styleguidist/lib/rsg-components/Playground';
import Markdown from 'react-styleguidist/lib/rsg-components/Markdown';
import ExamplesRenderer from 'react-styleguidist/lib/rsg-components/Examples/ExamplesRenderer';
// import ExamplesRenderer from 'react-styleguidist/lib/rsg-components/Examples/ExamplesRenderer';

const Playground = (props, state) => {
  console.log('Playground', props);
  console.log('Playground state', state);
  return <PlaygroundDefault {...props} />;
};

export default function Examples({ examples, name }, { codeRevision }) {
  console.log('codeRevision', codeRevision);
  return (
    <ExamplesRenderer>
      {examples.map((example, index) => {
        switch (example.type) {
          case 'code':
            console.log('example CODE', example);
            return (
              <Playground
                code={example.content}
                evalInContext={example.evalInContext}
                key={`${codeRevision}/${index}`}
                name={name}
                index={index}
                settings={example.settings}
              />
            );
          case 'markdown':

            console.log('example MD', example);
            return <Markdown text={example.content} key={index} />;
          default:
            return null;
        }
      })}
    </ExamplesRenderer>
  );
}
Examples.propTypes = {
  examples: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
Examples.contextTypes = {
  codeRevision: PropTypes.number.isRequired,
};

// import React from 'react';
// import ExamplesRenderer from 'react-styleguidist/lib/rsg-components/Examples/ExamplesRenderer';
// import DefaultSections from 'react-styleguidist/lib/rsg-components/Sections/SectionsRenderer';
// import { compose, lifecycle, pure } from 'recompose';

// export const ChildrenRenderer = ({ children, ...props }) => {

//   console.log('ChildrenRenderer', children);
//   console.log('ChildrenRenderer props', props);
//   console.log('ChildrenRenderer props', this);
//   const chilProps = React.Children.map(children, a => console.log('MAP CHILD', a.props));

//   console.log('ChildrenRenderer chilProps', chilProps);
//   return (<div>alan{children}</div>);
// };

// export const StyleGuideRenderer = ({
//   children,
//   ...props
// }) => {
//   console.log('children', children);
//   return (<ExamplesRenderer {...props}><ChildrenRenderer {...props} ><DefaultSections>{children}</DefaultSections></ChildrenRenderer></ExamplesRenderer>);
// };

// const enhance = compose(
//   pure,
//   lifecycle({
//     componentDidMount() {
//       console.log('=================componentMount', this);
//     },
//     componentDidUpdate() {
//       console.log('=================componentDidUpdate', this);
//     },
//     componentWillReceiveProps(nextProps) {
//       console.log('component wil receive', nextProps);
//       console.log('=================component wil receive', this);

//     },
//   }),
// );

// export default enhance(StyleGuideRenderer);
