import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
      <Link to="/word/add">
        <AddButton>
          <AddCircleIcon sx={{ fontSize: 60, color: "green" }} />
        </AddButton>
      </Link>
    </>
  );
};

const AddButton = styled.div`
  position: fixed;
  width: 61px;
  height: 61px;
  cursor: pointer;
  background-color: white;
  bottom: 50px;
  right: 50px;
  transform: rotate(0deg);
  transition: 0.5s;
  :hover {
    transform: rotate(90deg);
    transition: 0.5s;
  }
  /* h1 {
    position: fixed;
    color: white;
    bottom: 11px;
    right: 65px;
    font-size: 50px;
  } */
`;

export default Home;
