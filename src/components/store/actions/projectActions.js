import database from "../../config/fbconfig";
import LinearIndeterminate from "../../feedback/LinearIndeterminate";
import React, { Component } from "react";
import uuid from "uuid/v4";
import { timestamp } from "rxjs-compat/operator/timestamp";
export const createProject = project => {
  return (dispatch, getState) => {
    // make async call to database
    //dispatch({ type: "CREATE_PROJECT", project });
    const id = uuid();
    const data = {
      ...project,
      timestamp: new Date(),
      id
    };
    database
      .collection("projects")
      .doc(id)
      .set(data)
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })

      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};
