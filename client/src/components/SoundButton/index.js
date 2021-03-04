import React from "react";
import Audio from "./theme.mp3";
import { Howl, Howler } from "howler";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';

let playIcon = <FontAwesomeIcon icon={faPlayCircle} />;
let stopIcon = <FontAwesomeIcon icon={faStopCircle} />;

function SoundButton() {
  const [playing, setPlaying] = React.useState(false);
  const [buttonText, setButtonText] = React.useState(playIcon);

  var sound = new Howl({
    src: [Audio],
    onplay: function() {
      setPlaying(true);
      setButtonText(stopIcon);
    },
    onstop: function() {
      setPlaying(false);
      setButtonText(playIcon);
    }
  });

  Howler.volume(0.2);

  const handleClick = () => {
    if(!playing){
      sound.play();
    } if(playing) {
      Howler.stop();
    }
  }

  return(
    <li className='nav-item pad nav-style' onClick={handleClick}>
      <span id="playbtn">{buttonText}</span>
    </li>
  )
}

export default SoundButton;