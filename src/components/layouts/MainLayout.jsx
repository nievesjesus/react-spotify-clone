import { Outlet } from "react-router-dom";
import LeftMenu from "../sections/LeftMenu";
import PlayerControl from "../sections/PlayerControl";

const MainLayout = () => {

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