import React, { Component } from 'react'
import styled from 'styled-components'
import {
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaStackOverflow,
  FaEnvelope,
  FaAddressCard,
} from 'react-icons/fa';

const Icon = styled.a`
text-shadow: none;
box-shadow: 'none';
text-decoration: 'none';
color: 'black';

`;

class Links extends Component {
  render() {
    return (
      <Icon>
        <a href="https://codepen.io/Cabeda/">
          <FaCodepen />
        </a>
        <a href="https://stackoverflow.com/users/3637832/jecabeda">
          <FaStackOverflow />
        </a>
        <a href="https://www.linkedin.com/in/jecabeda/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Cabeda">
          <FaGithub />
        </a>
        <a href="mailto:jecabeda@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://drive.google.com/open?id=1Pa5w1Dv8AxiezI-6LKaVlPVmTB-b1DVV">
          <FaAddressCard />
        </a>
      </Icon>
    )
  }
}

export default Links
