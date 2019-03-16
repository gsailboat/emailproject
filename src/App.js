import React, { Component } from 'react';
import { Tabs } from 'antd';
import Grid from './Components/Grid';
import Create from './Components/Create'
import './App.css';
import emails from './data/emails.json'

const TabPane = Tabs.TabPane;

class App extends Component {
  render() {
    console.log(emails.length);
    return (
      <div className="App">
          <Tabs defaultActiveKey="1">
            <TabPane tab="List" key="1">
              <Grid />
            </TabPane>
            <TabPane tab="Create" key="2">
              <Create/>
            </TabPane>
          </Tabs>
      </div>
    );
  }
}

export default App;
