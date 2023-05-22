import React from 'react';
import { allowMeNews } from '../../assets';
import { Nav } from './styles';

const Navigation: React.FC = () => {
  return (
    <Nav>
      <img src={allowMeNews} alt="AllowMe News" />
    </Nav>
  );
};

export default Navigation;
