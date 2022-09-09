import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage4.jpg";
import { cardShadow, hoverEffect } from "../utils";

const iframe = '<iframe src="https://lichess.org/tv/frame?theme=brown&bg=dark" style="width: 400px; height: 444px;" allowtransparency="true" frameborder="0"></iframe>'

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
} 

function Lichesstv() {
  return (
    <Dailypuzzlee>
    <section>
    <Iframe iframe={iframe} />
    </section>
    </Dailypuzzlee>
  );
}

const Dailypuzzlee = styled.div`
  border-radius: 1rem;
  height: 215%;
  margin-left: 100px;
  padding: 1rem;
  background-color: white;
  width: 27.0vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;


export default Lichesstv;