import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/notfound'
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
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
