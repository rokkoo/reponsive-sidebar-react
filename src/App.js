import React, { useState } from 'react';
import { Row, Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import './App.css';
import Header from './components/header/HeaderComponent';
import Sidebar from './components/sidebar/SidebarComponent';

const styles = StyleSheet.create({
  container: {
    height: '100vh'
  },
  content: {
    marginTop: 54
  },
  mainBlock: {
    backgroundColor: '#F7F8FC',
    padding: 30
  }
});

function App() {
  const [selectedItem, setSelectedItem] = useState('Tickets');
  return (
    <div className="App">
      <Row className={css(styles.container)}>
        <Sidebar
          selectedItem={selectedItem}
          onChange={selectedItem => setSelectedItem(selectedItem)}
        />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <Header title={selectedItem} />
          <div className={css(styles.content)}>
            <span>Content</span>
          </div>
        </Column>
      </Row>
    </div>
  );
}

export default App;
