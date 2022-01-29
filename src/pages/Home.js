import { Container, CssBaseline, IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { getWord } from "../app/services/wordReducer.js";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { green } from "@mui/material/colors";
import {
  deleteWordFB,
  deleteWords,
  loadWordsFB,
  updateWordFB,
} from "../app/services/ducks.js";

const Home = () => {
  const [fetch, setFetch] = React.useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.words.wordList);
  //**** */
  React.useEffect(() => {
    dispatch(loadWordsFB());
  }, [fetch]);
  console.log(data);
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={2} mt={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((doc, index) => {
            return (
              <Grid item xs={4}>
                <WordBox key={index} completed={doc.completed}>
                  <IconBox>
                    <h1>{doc["word"]}</h1>
                    <div style={{ display: "flex" }}>
                      <IconButton
                        onClick={() => {
                          console.log(doc.completed);
                          dispatch(
                            doc.completed === true
                              ? updateWordFB(doc.id, {
                                  ...doc,
                                  completed: false,
                                })
                              : updateWordFB(doc.id, {
                                  ...doc,
                                  completed: true,
                                })
                          );
                          setFetch(fetch === true ? false : true);
                        }}
                      >
                        {doc.completed === true ? (
                          <CheckIcon sx={{ color: "#ffffff" }} />
                        ) : (
                          <CheckIcon color="success" />
                        )}
                        {/* <CheckIcon color="success" /> */}
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          navigate("/word/edit/" + index);
                        }}
                      >
                        {doc.completed === true ? (
                          <EditIcon sx={{ color: "#ffffff" }} />
                        ) : (
                          <EditIcon color="success" />
                        )}
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          dispatch(deleteWordFB(doc.id));
                        }}
                      >
                        {doc.completed === true ? (
                          <DeleteOutlineIcon sx={{ color: "#ffffff" }} />
                        ) : (
                          <DeleteOutlineIcon color="success" />
                        )}
                      </IconButton>
                    </div>
                  </IconBox>
                  <h2>[{doc["byung"]}]</h2>
                  <h3>{doc["means"]}</h3>
                  <h4>{doc["example"]}</h4>
                  <h4>{doc["translation"]}</h4>
                </WordBox>
              </Grid>
            );
          })}
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
  color: ${(props) => (props.completed === true ? "white" : "black")};
  h2 {
    font-size: small;
    margin: 0px;
  }
  h3 {
    font-size: medium;
    margin: 0px;
  }
  h4 {
    font-size: small;
    margin: 0px;
    color: ${(props) => (props.completed === true ? "white" : "blue")};
  }
  background: ${(props) => (props.completed === true ? "green" : "white")};
`;

const IconBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
