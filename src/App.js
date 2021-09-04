import React from "react";
import "./style.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>React Router Practice</h1>
      <Header />
    </div>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}
