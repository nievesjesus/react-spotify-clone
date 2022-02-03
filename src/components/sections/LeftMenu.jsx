import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const LeftMenu = () => {
    return (
    <nav className="left-menu">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="main-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Search</li>
                <li>Your Library</li>
                <li>Create Playlist</li>
                <li>Liked Songs</li>
            </ul>
        </div>
        <div className="menu-playlists">
            <ul>
                <li>Happy songs</li>
                <li>Warm up Lollapaloza</li>
                <li>Warm up Maroon 5</li>
                <li>Random songs</li>
                <li>Coding list</li>
            </ul>   
        </div>
     
    </nav>
    )
}

export default LeftMenu;