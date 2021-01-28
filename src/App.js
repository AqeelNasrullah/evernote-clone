import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Favorites from "./components/home/Favorites";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favorites" component={Favorites} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
