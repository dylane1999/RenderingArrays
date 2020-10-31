import logo from "./logo.svg";
import "./App.css";
import PostCard from "./PostCard";
import styled from "styled-components"

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  height: 100vh;
`;

function App() {
  return (
    <Root>
      <PostCard year={2012} name={"mohi andrabi"} position={"goalie"} />
    </Root>
  );
}

export default App;
