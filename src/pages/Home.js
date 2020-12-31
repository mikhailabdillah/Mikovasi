import React from 'react';

import Header from "./partials/Header";
import Footer from "./partials/Footer";

// Sections
import About from "./sections/About";
import HowItWorks from "./sections/HowItWorks";
import RecentProject from "./sections/RecentProjects";
import RecentPost from "./sections/RecentPost";
import Partners from "./sections/Partners";
import WhyUs from "./sections/WhyUs";

function Home() {

  return (
    <React.StrictMode>
      <Header />
      <About />
      <HowItWorks />
      <RecentProject />
      <WhyUs />
      <RecentPost />
      <Partners />
      <Footer />
    </React.StrictMode>
  );
}


export default Home;
