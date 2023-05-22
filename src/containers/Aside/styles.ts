import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.aside`
  background-color: ${theme.colors.aside};
  border-radius: 8px;
  display: grid;
  gap: 24px;
  padding: 24px;
  position: sticky;
  top: 24px;
  width: 330px;

  @media (max-width: ${theme.breakpoints.xl}) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  color: ${theme.colors.black};
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
`;
