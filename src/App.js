import React from "react";
import './App.css';

import Header from './components/Header';
import Home from './components/Home'
import NotFound from './components/NotFound';

import BoxShadow from './features/pages/BoxShadow';
import TextShadow from './features/pages/TextShadow';
import Border from './features/pages/Border';
import Transform from './features/pages/Transform';

import {
  BrowserRouter as Route,
  Switch
} from "react-router-dom";


export default function App() {
  return (
      <div>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/box-shadow">
            <BoxShadow/>
          </Route>
          <Route path="/text-shadow">
            <TextShadow/>
          </Route>
          <Route path="/border">
            <Border/>
          </Route>
          <Route path="/transform">
            <Transform/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
  );
}