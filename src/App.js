import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/header';
import Footer from './components/footer';

// Pages
import Home from './pages/home';
import Introduce from './pages/introduce';

// Themes
import './themes/common.css';

class App extends Component {
  render() {
    return (
      <div className="sosconf-app">
        <header className="sosconf-header">
          <Header>
            {/* header */}
          </Header>
        </header>
        <div className="sosconf-body">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/introduce" component={Introduce} />
            </Switch>
          </HashRouter>
        </div>
        <footer className="sosconf-footer">
          <Footer>
            {/* Footer */}
          </Footer>
        </footer>
      </div>
    );
  }
}

export default App;
