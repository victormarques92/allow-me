import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  align-items: center;
  background-color: ${theme.colors.footer};
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  gap: 32px;
  justify-content: space-between;
  line-height: 19px;
  margin-top: 60px;
  padding: 22px 32px;
`;
