import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  border-top: 1px solid ${theme.colors.divider};
  padding-block: 40px;
`;

export const Header = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const InfoPublish = styled.div`
  h5 {
    color: ${theme.colors.pink};
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
  }
`;

export const Medias = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`;

export const Title = styled.h3`
  color: ${theme.colors.black};
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 32px;
`;
