import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/notfound'
import Game from './pages/game';
import GameEnd from './pages/gameend';
import Contact from './pages/contact';
import './App.css'

const App: React.FC = () =>
{

  return (
    <BrowserRouter>
      <div className={"app"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<Game />} />
          <Route path="/gameend" element={<GameEnd />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
