import styled from "styled-components";

const css = styled.div`
  margin: 10px;

  h1 { text-align: center; }
  
  div {
    //background: pink;
    display: flex;
    justify-content: space-between;

    .hours {
      width: 90%;
      display: flex;
      flex-direction: column;
      text-content: left;

    }

    .previous, .next {
      background: red;
      width: 3%;
    }
  }

`

export default css;