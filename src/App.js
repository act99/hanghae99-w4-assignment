import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import AddPage from "./pages/AddPage";
import Home from "./pages/Home";
import styled from "styled-components";

function App() {
  return (
    <>
      <Wrap>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/word/add" element={<AddPage />} />
          <Route path="/word/edit/:id" element={<AddPage />} />
        </Routes>
      </Wrap>
    </>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: start;
  justify-items: center;
  background: linear-gradient(
        90deg,
        bg-color (dot-space - dot-size),
        transparent 1%
      )
      center,
    linear-dradient(bg-color (dot-space - dot-size), transparent 1%) center,
    dot-color;
  background-size: dot-space dot-space;
`;
export default App;
