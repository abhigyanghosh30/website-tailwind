import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <div className="flex grid  grid-cols-3 gap-4 justify-center max-h-96 bg-regal-blue-900">
        <p className=" mx-auto text-center p-10 text-silver-100">
          All rights reserved
        </p>
        <img
          className=" my-auto mx-auto  object-scale-down h-10"
          src="/logo-silver-text.svg"
          alt=""
        />
        <div className="mx-auto my-auto text-silver-300">
          <a href="/">
            <FontAwesomeIcon icon={['fab','instagram']} fixedWidth size="2x"/>
          </a>
          <a href="/">
            <FontAwesomeIcon icon={['fab','facebook']} fixedWidth size="2x"/>
          </a>
          <a href="/">
            <FontAwesomeIcon icon={['fab','linkedin']} fixedWidth size="2x"/>
          </a>
          <a href="/">
            <FontAwesomeIcon icon={['fab','github']} fixedWidth size="2x"/>
          </a>
        </div>
      </div>
    );
  }
}
export default Footer;
