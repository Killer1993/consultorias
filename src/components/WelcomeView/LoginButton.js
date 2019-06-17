import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const CollisionLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/home" {...props} />
));

export default function ButtonRouter() {
  return (
      <Button component={CollisionLink}>Login</Button>
  );
}

