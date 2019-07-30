import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { bool, func, string } from 'prop-types';
const styles = StyleSheet.create({
  activeBar: {
    height: 56,
    width: 3,
    backgroundColor: '#DDE2FF',
    position: 'absolute',
    left: 0
  },
  activeContainer: {
    backgroundColor: 'rgba(221,226,255, 0.08)'
  },
  activeTitle: {
    color: '#DDE2FF'
  },
  container: {
    height: 56,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(221,226,255, 0.08)'
    },
    paddingLeft: 32,
    paddingRight: 32
  },
  title: {
    fontFamily: 'Muli',
    fontSize: 16,
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: '#A4A6B3',
    marginLeft: 24
  }
});
const MenuItemComponent = props => {
  const { active, icon: Icon, title, ...otherProps } = props;
  return (
    <Row
      className={css(styles.container, active && styles.activeContainer)}
      vertical="center"
      {...otherProps}
    >
      <Icon fill={active && '#DDE2FF'} opacity={!active && '0.4'} />
      <span className={css(styles.title, active && styles.activeTitle)}>
        {title}
      </span>
    </Row>
  );
};

MenuItemComponent.prototypes = {
  active: bool,
  icon: func,
  title: string
};

export default MenuItemComponent;
