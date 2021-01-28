import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Favorites from "./components/home/Favorites";
import NoteDetail from "./components/notes/NoteDetail";
import NoteEdit from "./components/notes/NoteEdit";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" component={Favorites} />
                <Route exact path="/note/:id" component={NoteDetail} />
                <Route path="/note/:id/edit" component={NoteEdit} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
