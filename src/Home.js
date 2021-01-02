import { Component } from 'react';
import Contact from './Contact';
import Hero from './Hero';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <svg
          className="block relative right-0 w-1/2 object-contain transform -translate-x-1/2 h-full text-silver-500"
          fill="currentColor"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          aria-hidden="true">
          <path d="M 960 0 L 336.45898 1080 L 472.75391 1080 L 1220.0859 1080 L 1129.2266 922.625 L 609.05078 922.625 L 960 314.75586 L 1401.8164 1080 L 1583.541 1080 L 960 0 z " />
        </svg>
        <div className="flex bg-silver-300">
          <div className="mx-auto">
            <Contact />
          </div>
        </div>
        <svg
          className="block right-0 relative w-1/2 object-contain transform translate-x-full h-full text-regal-gold"
          fill="currentColor"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          aria-hidden="true">
          <path d="M 1381.6156,1.7636132 C 1084.0892,2.0744785 843.0606,243.35486 843.06098,540.88174 c 0,297.74676 241.37142,539.11816 539.11792,539.11826 297.7469,-10e-5 539.1183,-241.37154 539.1183,-539.11826 0,-22.52952 -1.4118,-45.03691 -4.2277,-67.38974 h -534.8906 v 134.77955 h 398.6789 c -32.8837,194.54375 -201.3753,336.9467 -398.6789,336.94878 -223.3101,0 -404.33853,-181.02854 -404.33853,-404.33859 0,-223.31005 181.02843,-404.33859 404.33853,-404.33859 144.4531,0.003 277.932,77.06935 350.1584,202.1693 h 149.6158 C 1799.5722,135.06129 1601.8617,1.764386 1382.1789,1.7636132 Z" />
        </svg>
      </div>
    );
  }
}
export default Home;
