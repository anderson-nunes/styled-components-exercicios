import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";
import {
  StyleHeader,
  StyleMain,
  StyleNav,
  StylePainelVideos,
  StyleContainer,
}
  from "./style";

import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <GlobalStyle>
      <StyleContainer>
        <StyleHeader>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </StyleHeader>

        <StyleMain>
          <StyleNav>
            <ul>
              <li>Início</li>
              <li>Em alta</li>
              <li>Inscrições</li>
              <hr />
              <li>Originais</li>
              <li>Histórico</li>
            </ul>
          </StyleNav>

          <StylePainelVideos>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </StylePainelVideos>
        </StyleMain>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </StyleContainer>
    </GlobalStyle>
  );
}
