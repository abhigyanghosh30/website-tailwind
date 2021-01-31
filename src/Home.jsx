import { Component } from 'react';
import Contact from './Contact';
import Hero from './Hero';
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.css';
const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="flex items-center justify-center">
              <div className="glass z-20 min-h-3/4 w-8/12 bg-gradient-to-br from-glass-white-700 to-glass-white-300 rounded-3xl">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              {/* <div className="circle2 z-10 absolute top-10 right-40 h-80 w-80 bg-gradient-to-br from-glass-white-700 to-glass-white-300 rounded-full"></div>
              <div className="circle1 z-10 absolute bottom-10 left-40 h-80 w-80 bg-gradient-to-br from-glass-white-700 to-glass-white-300 rounded-full"></div> */}
            </div>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default Fullpage;
