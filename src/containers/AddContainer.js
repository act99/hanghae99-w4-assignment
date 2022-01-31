import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import InputBox from "../components/InputBox";
import { kindOf, kindOfDict } from "../export_variables/kindOf";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import {
  addWordFB,
  createWords,
  loadWordsFB,
  updateWordFB,
  updateWords,
} from "../app/services/ducks";

const AddContainer = () => {
  React.useEffect(async () => {
    await dispatch(loadWordsFB());
  }, []);
  //** 패치했을 때, */
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const word_list = useSelector((state) => state.words.wordList);

  const { id } = useParams();
  let dict = {};
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < inputRef.current.length; i++) {
      dict[kindOfDict[i]] = inputRef.current[i].value;
    }
    dict = { ...dict, completed: false };
    dispatch(addWordFB(dict));
    navigate("/");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    for (let i = 0; i < inputRef.current.length; i++) {
      dict[kindOfDict[i]] = inputRef.current[i].value;
    }
    dict = { ...dict, completed: false };
    dispatch(updateWordFB(word_list[id].id, dict));
    // dispatch(createWords(dict));
    navigate("/");
  };

  const inputRef = useRef([]);

  // ** 추가페이지일 때 페이지일때
  if (id === undefined) {
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
  }
  // ** 수정 페이지일때

  return (
    <div>
      <AddWrapper>
        <h3>단어 수정하기</h3>
        <form onSubmit={handleEdit}>
          {Array.from({ length: 5 }, (item, index) => {
            return (
              <InputBox
                key={index}
                word={kindOf[index]}
                exist={word_list[parseInt(id)][kindOfDict[index]]}
                ref={(el) => (inputRef.current[index] = el)}
              />
            );
          })}
          <Button type="submit">수정하기</Button>
        </form>
      </AddWrapper>
    </div>
  );
};

const AddWrapper = styled.div`
  height: 80vh;
  width: 100%;
  background-color: white;
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
