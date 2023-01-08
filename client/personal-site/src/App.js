import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import FadeIn from 'react-fade-in';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if ( spinner ) {
    spinner.style.transition="opacity 1.5s linear";
    spinner.style.transitionDelay="0.5s";
    spinner.style.opacity=0;
    setTimeout(() => {
      setLoading(false);
      spinner.style.display="none";
    }, 2000)
  }

  return (
    !loading && (
      <FadeIn>
        <div className="App">
          <div className="blur-border">
            <Router>

              <Navbar />

              <Routes>
                <Route path='*' element={<NotFound />}/>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/projects/:id" element={<ProjectDisplay />} />
                <Route exact path="/resume" element={<Resume />} />
                <Route exact path="/blog" element={<Blog />} />
              </Routes>

            </Router>
          </div>
        </div>
      </FadeIn>
    )
  );
}

export default App;
