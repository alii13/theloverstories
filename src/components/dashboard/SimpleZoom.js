import React from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

export default function SimpleZoom() {
  const checked = true;

  return (
    <div className="">
      <div className="">
        <Zoom in={checked}></Zoom>
      </div>
    </div>
  );
}
