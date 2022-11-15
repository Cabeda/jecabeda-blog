import React from 'react'
import styled from 'styled-components'
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaAddressCard,
  FaMastodon,
  FaTwitter
} from 'react-icons/fa';

const Icon = styled.div`
display: flex;
justify-content:space-around;
text-shadow: none;
box-shadow: 'none';
text-decoration: 'none';
color: 'black';
font-size: 2rem;
text-decoration: none;
`;

const Link = styled.a`
position: relative;
box-shadow: none;
&:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--textLink);
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

&:hover::before {
  text-decoration-color: red;
  transform-origin: bottom left;
  transform: scaleX(1);
}
`;

export default function Links() {
    return (
      <Icon>
        <Link href="https://www.linkedin.com/in/jecabeda/">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/Cabeda">
          <FaGithub />
        </Link>
        <Link rel="me" href="https://mastodon.social/@jecabeda">
          <FaMastodon />
        </Link>
        <Link href="https://twitter.com/jecabeda">
          <FaTwitter />
        </Link>
        <Link href="mailto:jecabeda@gmail.com">
          <FaEnvelope />
        </Link>
        <Link href="https://docs.google.com/document/d/e/2PACX-1vS6y82gwoGuClfA1GbsBg1vrr4mJf3c5mlovw5E5VS69Qeo0hYGA-LEEsiFF2fdLu6xnAFXoequt2il/pub">
          <FaAddressCard />
        </Link>
      </Icon>
    )
  }