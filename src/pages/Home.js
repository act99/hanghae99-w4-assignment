import { Container, CssBaseline } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { getWord } from "../app/services/wordReducer.js";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { fetchData } from "../app/services/getPostsReducer.js";
const Home = () => {
  const dispatch = useDispatch();
  //**** */
  const { data, loading, error } = useSelector((state) => state.dataReducer);
  const word = useSelector((state) => state.wordReducer.wordList);
  React.useEffect(() => {
    //**** */
    const getData = async () => {
      const data = await getDocs(collection(db, "wordList"));
      dispatch(getWord(data.docs.map((doc) => doc.data())));
    };
    getData();
    //**** */
  }, []);
  console.log(word);
  console.log(data);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <button
          onClick={() => {
            dispatch(fetchData());
            console.log(data);
          }}
        >
          ㅎㅇ
        </button>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={4}>
            {word.map((doc, index) => {
              return (
                <WordBox key={index}>
                  <IconBox>
                    {" "}
                    <h1>{doc["word"]}</h1>
                    <h2>[{doc["byung"]}]</h2>
                  </IconBox>

                  <h3>{doc["means"]}</h3>
                  <h4>{doc["example"]}</h4>
                  <h4>{doc["translation"]}</h4>
                </WordBox>
              );
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
  height: 170px;
  border: solid 2px green;
  border-radius: 10px;
  margin: 15px;
  padding: 15px;

  h3 {
    font-size: medium;
    margin: 0px;
  }
  h4 {
    font-size: small;
    margin: 0px;
    color: blue;
  }
`;

const IconBox = styled.div`
  margin-bottom: 6px;
  width: 100%;
  height: 50px;
  h1 {
    font-weight: bold;
    font-size: x-large;
    margin: 0px;
  }
  h2 {
    font-size: small;
    margin: 0px;
  }
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
