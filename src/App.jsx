import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <Score>
          <h6>Your Result</h6>
          <div>
            <h1>76</h1>
            <h6>of 100</h6>
          </div>
          <p>Great</p>
          <h6>
            You scored higher than 65% of the people who have taken these tests.
          </h6>
        </Score>
        <div></div>
      </Wrapper>
      <div>
        <p>asd</p>
        <p>123123123123</p>
        <h1>123123asdasd</h1>
      </div>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
 body{
  font-family: Hanken Grotesk;
  font-size: 18px;
  margin: 0px
}
p{
  margin: 0%;
}
h6,h1,h2,h3,h4,h5{
  margin: 0%;
}
`;

const Score = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 0px 0px 25px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0%;
  padding: 0%;
  background-image: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
  color: white;
  text-align: center;
  gap: 15px;
  div {
    border-radius: 9999px;
    background-image: linear-gradient(
      hsla(256, 72%, 46%, 1),
      hsla(241, 72%, 46%, 0)
    );
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0%;
    padding: 0%;
    h6 {
      color: hsl(241, 100%, 89%);
    }
  }
  h6 {
    color: hsl(241, 100%, 89%);
  }
  p {
    font-weight: bold;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
