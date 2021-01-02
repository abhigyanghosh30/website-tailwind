import { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="flex justify-center max-h-96 bg-regal-blue-900">
        <p className="inline-block mx-auto text-center p-10 text-silver-100">
          All rights reserved
        </p>
        <img
          className=" my-auto mx-auto inline-block object-scale-down h-10"
          src="/logo-silver-text.svg"
          alt=""
        />
      </div>
    );
  }
}
export default Footer;
