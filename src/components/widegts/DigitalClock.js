import React from "react";
import { storiesOf } from "@storybook/react";

import { Box, Grommet, Clock } from "grommet";
import { grommet } from "grommet/themes";

const DigitalClock = () => (
  <Grommet theme={grommet}>
    <Box>
      <Clock type="digital" />
    </Box>
  </Grommet>
);

export default DigitalClock;
