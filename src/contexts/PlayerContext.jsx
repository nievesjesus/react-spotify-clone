import { useState, createContext } from "react";
import tracksList from "../services/Tracks";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    
    // Cual es el indice en el array del track actual que estoy escuchando
    const [trackIndex, setTrackIndex] = useState(0);

    // Lista / array de todos mis tracks, esto puede cambiar en base a la seleccion del album
    const [tracks] = useState(tracksList)

    // Indicador de si el reproducto esta reproduciendo o no
    const [isPlaying, setIsPlaying] = useState(false);

    // Indicador paa saber el reproductor se inicio por primera vez
    const [playerStarted, setPlayerStarted] = useState(false);

    // Reproducir la cancion cuando hago click en la lista
    const playSongOnClick = (index) => {
        setPlayerStarted(true)
        setTrackIndex(index)
        setIsPlaying(true)
    }

    const currenTrack = tracks[trackIndex]

    return (
        <PlayerContext.Provider value={{ tracks, trackIndex, setTrackIndex, isPlaying, setIsPlaying, playSongOnClick, playerStarted, currenTrack}}>
            {children}
        </PlayerContext.Provider>
    )

}