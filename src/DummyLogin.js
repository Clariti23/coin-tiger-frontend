import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import { border } from "@material-ui/system";

export default function DummyLogin() {
  return (
    <div>
      <Box
        border={1}
        padding="2"
        margin="5"
        borderColor="grey.500"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Typography variant="body1" color="textPrimary" align="left">
          {'To login, use username "gfero@gmail.com" and password: "gfero"'}
        </Typography>
      </Box>
    </div>
  );
}
