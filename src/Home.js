import { Component } from 'react';
import Contact from './Contact';
import Hero from './Hero';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <svg
          className="hidden lg:block relative right-0 w-1/2 object-contain transform -translate-x-1/2 h-full text-regal-blue-300"
          fill="currentColor"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          aria-hidden="true">
          <path d="M 960 0 L 336.45898 1080 L 472.75391 1080 L 1220.0859 1080 L 1129.2266 922.625 L 609.05078 922.625 L 960 314.75586 L 1401.8164 1080 L 1583.541 1080 L 960 0 z " />
        </svg>
        <div className="container">
          <Contact />
        </div>
      </div>
    );
  }
}
export default Home;
