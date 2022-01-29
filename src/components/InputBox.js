import React, { forwardRef } from "react";
import styled from "styled-components";

const InputBox = forwardRef((props, ref) => {
  return (
    <div>
      <Wrapper>
        <h2>{props.word}</h2>
        <Input type="text" ref={ref} defaultValue={props.exist} />
      </Wrapper>
    </div>
  );
});

export default InputBox;

const Wrapper = styled.div`
  margin: auto;
  width: 400px;
  height: 80px;
  text-align: start;

  h2 {
    font-weight: bold;
    font-size: medium;
    margin: 0px;
  }
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  border: 0px;
  border-bottom: solid 1px green;
  font-size: small;
  background: rgba(51, 170, 51, 0);
  :focus {
    outline: none;
  }
`;
