import { Container, CssBaseline } from "@mui/material";
import { Box, style } from "@mui/system";
import React, { useMemo } from "react";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import Grid from "@mui/material/Grid";

const Home = () => {
  let data = [];
  React.useEffect(() => {
    const query = async () => {
      data = await getDocs(collection(db, "wordList"));
      data.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    };
    query();
  }, [data]);
  console.log(data);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={2} mt={3}>
          <Grid item xs={4}>
            {/* {data.map((doc, index) => {
              return <WordBox>{doc.data()[]}</WordBox>;
            })} */}
            {data.forEach((doc) => {
              doc.data().map((item) => {
                return <h3>item</h3>;
              });
            })}
          </Grid>
        </Grid>
      </Container>
      <Link to="/word/add">
        <AddButton>
          <AddCircleIcon sx={{ fontSize: 60, color: "green" }} />
        </AddButton>
      </Link>
    </>
  );
};

const WordBox = styled.div`
  width: 100%;
  height: 150px;
  border: solid 2px green;
  border-radius: 10px;
`;

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
