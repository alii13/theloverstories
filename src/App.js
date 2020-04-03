import React from "react";
import logo from "./logo.svg";
import PersistentDrawerLeft from "./components/layout/PersistentDrawerLeft";
import "./App.css";
import Pagination from "react-materialize/lib/Pagination";
import SimpleContainer from "./components/layout/SimpleContainer";
import GridAreasAlternative from "./components/dashboard/GridAreasAlternative";
import { Grommet, Box, Grid } from "grommet";
import Heading from "./components/feedback/Heading";
import FullWidthGrid from "./components/layout/FullWidthGrid";
const DEFAULT_QUERY = "redux";
const BASE_URL = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query";
const url = `${BASE_URL}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
//console.log(url);

function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft />
      <Heading />
      <Box>
        <FullWidthGrid />
      </Box>
      <Pagination />
    </div>
  );
}

export default App;
