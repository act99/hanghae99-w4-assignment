import React from "react";
import { Container, CssBaseline } from "@mui/material";
import AddContainer from "../containers/AddContainer";

const AddPage = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <AddContainer />
      </Container>
    </>
  );
};

export default AddPage;
