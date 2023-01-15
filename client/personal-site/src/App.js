import FadeIn from 'react-fade-in';
import { useState  } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe';
// import Blog from './pages/Blog'
// import Login from './pages/Login';
// import Register from './pages/Register';
import NotFound from './pages/NotFound';
// import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience'
import UILoader from './helpers/UILoader';
import LandingPage from './pages/LandingPage';
import Cursor from './components/Cursor';


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

        <Cursor />

      <div className="App">
          <div className="main-content">

              <BrowserRouter>
                <Routes>

                <Route exact path="/" element={<UILoader/>}>
                  <Route index element={<LandingPage />} />
                  <Route exact path="/experience" element={<Experience />} />
                  <Route exact path="/projects" element={<Projects />} />
                  <Route exact path="/contact" element={<ContactMe />} />
                  <Route path="*" element={<NotFound />}/>
                </Route>
                 
                </Routes>
              </BrowserRouter>
            
          </div>
      </div>
      
      </FadeIn>
    )
  );
}

export default App;