import logo from "./logo.svg";
import "./App.css";
import PostCard from "./PostCard";
import styled from "styled-components"
import ForEachMethod from "./ForEachMethod"

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  height: 100vh;
  padding: 25px;
`;

const Spacing = styled.div`
  padding: 25px;
`;


function App() {
  return (
    <Root>
      <PostCard />
      <Spacing/>
      <ForEachMethod/>
    </Root>
  );
}

export default App;
