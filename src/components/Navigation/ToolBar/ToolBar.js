import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './ToolBar.module.css';
const ToolBar = () => {
  return (
    <header className={classes.ToolBar}>
      <div>Menu</div>
      <div>Logo</div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default ToolBar;
