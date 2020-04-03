import React from "react";
import { Pagination, Icon } from "react-materialize";
export default () => (
  <Pagination
    activePage={1}
    items={10}
    leftBtn={<Icon>chevron_left</Icon>}
    maxButtons={8}
    rightBtn={<Icon>chevron_right</Icon>}
  />
);
