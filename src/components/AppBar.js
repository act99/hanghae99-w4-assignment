import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AppBar = () => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Wrap>
          <h1>중국어 단어장</h1>
        </Wrap>
      </Link>
    </div>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 6vh;
  text-align: center;
  border-bottom: solid 1px green;
  h1 {
    color: black;
    font-weight: bold;
    font-size: x-large;
  }
`;

const Button = styled.button`
  display: block;
  width: 20%;
  height: 100%;
  margin: auto;
`;

export default AppBar;
