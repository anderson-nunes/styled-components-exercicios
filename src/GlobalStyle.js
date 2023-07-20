
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = styled.div`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  padding: 0;
  margin: 0;
}

footer {
  background: #333b3e;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 30px;
}

`

export default createGlobalStyle