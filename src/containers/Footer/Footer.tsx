import React from 'react';
import { allowMeNewsGrey } from '../../assets';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={allowMeNewsGrey} alt="AllowMe News" />

      <p>
        Copyright © 2023 AllowMe News. Todos os direitos
        reservados
      </p>
    </Container>
  );
};

export default Footer;
