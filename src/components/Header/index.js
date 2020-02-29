import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { Container } from './styles';

import Logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <nav>
        <img src={Logo} alt="Logo" />
        <div>
          <strong>Meu perfil</strong>
          <FaUserCircle size={35} color="#fff" />
        </div>
      </nav>
    </Container>
  );
}
