import FadeIn from 'react-fade-in';
import { useState  } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe';
import NotFound from './pages/NotFound';
import UILoader from './helpers/UILoader';
import LandingPage from './pages/LandingPage';
import Cursor from './components/Cursor';

import { inject } from '@vercel/analytics';
import Admin from './pages/Admin';

inject();


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
                  <Route exact path="/projects" element={<Projects />} />
                  <Route exact path="/contact" element={<ContactMe />} />
                  <Route exact path="/null" element={<Admin />} />
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