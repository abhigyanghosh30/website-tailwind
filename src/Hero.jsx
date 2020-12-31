import { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="bg-silver-300 flex min-h-96 grid lg:grid-cols-2 overflow-hidden">
        <div className="my-auto z-10 justify-center">
          <img src="/logo.svg" className="block mx-auto h-20" alt="" />
          <h1 className="block font-custom font-bold md:text-5xl lg:text-7xl text-regal-blue-900 text-center">
            ABHIGYAN GHOSH
          </h1>
        </div>
        <img className="object-fill" src="/hero_bg.png" alt="" />
      </div>
    );
  }
}
export default Hero;
