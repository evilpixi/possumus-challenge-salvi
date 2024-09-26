import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/notfound'
import Game from './pages/game';
import './App.css'

const App: React.FC = () =>
{

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
