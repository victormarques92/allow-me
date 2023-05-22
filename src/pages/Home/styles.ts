import styled from 'styled-components';
import theme from '../../theme';

export const Filter = styled.div`
  display: flex;
  gap: 16px;
  padding: 40px 32px;
`;

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 24px;
  padding-inline: 24px;

  @media (max-width: ${theme.breakpoints.xl}) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
`;
