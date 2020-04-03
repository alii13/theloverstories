import React from "react";
import { Grommet, Box, Grid } from "grommet";
import { grommet } from "grommet/themes";

const GridAreasAlternative = () => {
  return (
    <Grommet full theme={grommet}>
      <Grid
        rows={["medium"]}
        columns={["3/7", "2/7"]}
        areas={[["sidebar", "main"]]}
        gap="small"
      >
        <Box background="light-5" gridArea="sidebar">
          Sidebar
        </Box>

        <Box background="light-2" gridArea="main">
          Main
        </Box>
      </Grid>
    </Grommet>
  );
};
export default GridAreasAlternative;
