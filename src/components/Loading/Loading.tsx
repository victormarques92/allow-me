import React from 'react';
import { MoonLoader } from 'react-spinners';
import theme from '../../theme';
import { BoxLoad } from './styles';

const Loading: React.FC = () => {
  return (
    <BoxLoad>
      <MoonLoader size={40} color={theme.colors.green.main} />
    </BoxLoad>
  );
};

export default Loading;
