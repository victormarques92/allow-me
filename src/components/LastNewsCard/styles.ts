import styled from 'styled-components';
import theme from '../../theme';

export const Anchor = styled.a`
  border: 1px solid ${theme.colors.mischka};
  border-radius: 4px;
  display: block;
  padding: 16px;
  width: 100%;
`;

export const Title = styled.h4`
  color: ${theme.colors.shark};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 4px;
`;

export const PublishedAt = styled.p`
  color: ${theme.colors.pink};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
