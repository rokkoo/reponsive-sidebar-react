import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import IconTickets from '../../assets/icon-ticket.js';
import IconArticles from '../../assets/icon-articles';
import IconSettings from '../../assets/icon-settings';
import iconSettings from '../../assets/icon-settings';
import iconArticles from '../../assets/icon-articles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#363740',
    width: 255,
    paddingTop: 32
  },
  logoItem: {
    marginTop: 30
  },
  menuItemList: {
    marginTop: 52
  },
  separator: {
    borderTop: '1px solid #DFE0EB',
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06
  }
});

const SidebarComponent = props => {
  return (
    <Column className={css(styles.container)}>
      <LogoComponent />
      <Column className={css(styles.menuItemList)}>
        <MenuItemComponent
          title="Tickets"
          icon={IconTickets}
          active={props.selectedItem === 'Tickets'}
          onClick={() => props.onChange('Tickets')}
        />
        <MenuItemComponent
          title="Articles"
          icon={iconArticles}
          active={props.selectedItem === 'Articles'}
          onClick={() => props.onChange('Articles')}
        />
        <div className={css(styles.separator)} />
        <MenuItemComponent
          title="Settings"
          icon={iconSettings}
          active={props.selectedItem === 'Settings'}
          onClick={() => props.onChange('Settings')}
        />
      </Column>
    </Column>
  );
};

export default SidebarComponent;
