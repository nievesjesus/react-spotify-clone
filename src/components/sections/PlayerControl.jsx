import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import AudioPlayer from "../elements/AudioPlayer";
import Backdrop from "../elements/Backdrop";

const PlayerControl = () => {
    const { trackIndex, isPlaying, playerStarted, currenTrack } = useContext(PlayerContext);
    const { color, image, title, artist } = currenTrack;

    return (
    <div className={`player-controls ${!playerStarted ? "hide"  : ""}`}>
                <Backdrop
        trackIndex={trackIndex}
        activeColor={color}
        isPlaying={isPlaying}
        />  
        <div className="player-details">
            <div>
                <img src={image} alt="artwork" className="artwork-control-bar" />
            </div>
            <div className="song-details">
                <div>{title}</div>
                <div>{artist}</div>
            </div>
        </div>
        <div className="player-full-controls">
            <AudioPlayer />
        </div>
        <div className="player-more-controls">
        
        </div>
      
    </div>
    )
}

export default PlayerControl;