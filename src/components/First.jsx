import React from 'react';
import AnyContext from '../AnyContext';
import Typography from '@material-ui/core/Typography';

const FirstExample = () => (
  <div>
    <ConsumerText>Consumer Text</ConsumerText>
    <ContextHookText>Context Hook Text</ContextHookText>
  </div>
);

const ConsumerText = ({ children }) => (
  <AnyContext.Consumer>
    {color => <Typography color={color}>{children}</Typography>}
  </AnyContext.Consumer>
);

const ContextHookText = ({ children }) => {
  const color = React.useContext(AnyContext);
  return <Typography color={color}>{children}</Typography>;
};

export default FirstExample;
