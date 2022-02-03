import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { PlayerContext } from "../../contexts/PlayerContext";
import LeftMenu from "../sections/LeftMenu";
import PlayerControl from "../sections/PlayerControl";
import TopBar from "../sections/ToBar";

const MainLayout = () => {

    const { trackIndex } = useContext(PlayerContext);

    return(
        <div className="spotify-container">
            <LeftMenu />
            <div className="spotify-body-container">
                <Outlet />
            </div>
             <PlayerControl />
        </div>
    )
}

export default MainLayout;