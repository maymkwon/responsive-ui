import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Row, Column} from './common/layout'
import AttrHeader from './components/AttrHeader'
import ExtendHeader from './components/ExtendHeader'
import ChangeTag from './components/ChangeTag'
import LinkStyle from './components/LinkStyle'
import ButtonStyle from './components/ButtonStyle'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <Row>
            <Column xs="12" sm="6" md="8" style={{background:'red'}}>
              1
            </Column>
            <Column xs="6" md="4" style={{background:'black'}}>
              2
            </Column>
          </Row>
          <hr />
          <h1>스타일 생성</h1>
          <AttrHeader />
          <hr />
          <ExtendHeader />
          <hr />
          <ChangeTag />
          <hr />
          <LinkStyle />
          <hr />
          <ButtonStyle />
        </div>
      </div>
    );
  }
}

export default App;
