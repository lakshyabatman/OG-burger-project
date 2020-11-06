import React from 'react';
import Aux from '../../hoc/Aux';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import classes from './Layout.module.css';
const Layout = (props) => (
  <Aux>
    <ToolBar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
