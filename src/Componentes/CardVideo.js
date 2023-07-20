import { StyleCardVideo } from "../style";



function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <StyleCardVideo>
      <div onClick={reproduzVideo}>
        <img src={props.image1} alt={props.textoAlternativo} />
        <h4>{props.titulo}</h4>
      </div>
    </StyleCardVideo>
  );
}

export default CardVideo;
