import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PersistentDrawerLeft from "./components/layout/PersistentDrawerLeft";
import "./App.css";
//import Pagination from "react-materialize/lib/Pagination";
//import Heading from "./components/feedback/Heading";
//import FullWidthGrid from "./components/layout/FullWidthGrid";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import CreateProject from "./components/projects/CreateProject";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <PersistentDrawerLeft />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/projects/:id" component={ProjectDetails} />
        <Route path="/create" component={CreateProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
