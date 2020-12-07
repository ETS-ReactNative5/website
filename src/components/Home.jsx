import React from 'react';

import Hero from './Hero';
import About from './About';
import GetInvolved from './GetInvolved';
import Speakers from './Speakers';
import Leadership from './Leadership';
import Sponsors from './Sponsors';
import Footer from './Footer';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <About />
      <GetInvolved />
      <Speakers />
      <Leadership />
      <Sponsors />
      <Footer />
    </div>
  );
}

Home.displayName = 'Home';
export default Home;
