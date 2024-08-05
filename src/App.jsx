// App.jsx

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Work from './pages/Work';
import Contact from './pages/Contact';

import useDocumentTitle from './useDocumentTitle';

function App() {
  const baseTitle = 'Sourav Halder | Photographer | @madly_ordinary';
  useDocumentTitle(baseTitle);

  return (
    <>
      <Navbar />
      <div className='mt-[75px]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <hr className="mt-5" />
      <Footer />
    </>
  )
}

export default App;