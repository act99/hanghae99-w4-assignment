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
`;
export default App;
