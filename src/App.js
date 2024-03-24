// import { useState } from 'react';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import Blog from './components/Blog.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './components/LandingPage.jsx';
import SummaryDescription from './components/SummaryDescription.jsx';

library.add(fab, faGlobe, faUser)
const App = () => {

  return (

    <>
      <main>
        <LandingPage />
        <Blog />
        <SummaryDescription/>
        <Footer />

      </main>
    </>
  );
}

export default App;
// Command+shift+I activates the format command