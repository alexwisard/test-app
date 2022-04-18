import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import AppFooter from './AppFooter';
class App extends Component {
  render(){
    return <giv>
      <div>
        <h1>Hello, World!</h1>
      </div>
      <AppFooter />
    </giv>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

