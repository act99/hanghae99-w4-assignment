import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import InputBox from "../components/InputBox";
import { kindOf } from "../export_variables/kindOf";
const AddContainer = () => {
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < inputRef.current.length; i++) {
      console.log(inputRef.current[i].value);
    }
  };
  const inputRef = useRef([]);

  return (
    <div>
      <AddWrapper>
        <h3>단어 추가하기</h3>
        <form onSubmit={handleOnSubmit}>
          {Array.from({ length: 5 }, (item, index) => {
            return (
              <InputBox
                key={index}
                word={kindOf[index]}
                ref={(el) => (inputRef.current[index] = el)}
              />
            );
          })}
          <Button type="submit">저장하기</Button>
        </form>
      </AddWrapper>
    </div>
  );
};

const AddWrapper = styled.div`
  height: 80vh;
  width: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: start;
  text-align: center;
  h3 {
    font-weight: bold;
    color: green;
  }
`;

const Button = styled.button`
  color: white;
  background-color: green;
  border-radius: 5px;
  font-size: medium;
  font-weight: bold;
  width: 200px;
  height: 50px;
  border: solid 1px green;
  cursor: pointer;
`;

export default AddContainer;
