import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Error from './pages/Error';
import Home from './pages/Home';
import Playlist from './pages/PlayList';
import WebFont from 'webfontloader';
import { PlayerProvider } from './contexts/PlayerContext';

const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    });
   }, []);

   
  return (
    <PlayerProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={ <Home />} />
            <Route path="/playlist" element={<Playlist />} />                            
            <Route path="*" element={<Error />} />
          </Route>       
        </Routes>
      </BrowserRouter>
    </PlayerProvider>
  );
}

export default App;
