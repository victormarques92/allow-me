import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: fit-content;

  img {
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SelectCustom = styled.select`
  appearance: none;
  background-color: ${theme.colors.green.bg};
  border-radius: 4px;
  color: ${theme.colors.green.main};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  line-height: 19px;
  outline: 0;
  padding: 8px 40px 8px 16px;
  transition: 0.2s ease-in-out;

  &:hover:not([disabled]) {
    background-color: ${theme.colors.green.bgHover};
    color: ${theme.colors.green.dark};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
