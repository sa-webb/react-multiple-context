import React from 'react';
import AnotherContext from '../AnotherContext';
import Typography from '@material-ui/core/Typography';

const SecondExample = () => (
  <div>
    <ConsumerText>Consumer Text</ConsumerText>
    <ContextHookText>Context Hook Text</ContextHookText>
  </div>
);

const ConsumerText = ({ children }) => (
  <AnotherContext.Consumer>
    {color => <Typography color={color}>{children}</Typography>}
  </AnotherContext.Consumer>
);

const ContextHookText = ({ children }) => {
  const color = React.useContext(AnotherContext);
  return <Typography color={color}>{children}</Typography>;
};

export default SecondExample;
