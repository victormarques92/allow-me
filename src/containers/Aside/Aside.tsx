import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Post } from '../../@types';
import { LastNewsCard, Loading } from '../../components';
import { Container, Title } from './styles';

const Aside: React.FC = () => {
  const { isLoading, data } = useQuery(['lastNews'], () =>
    axios
      .get(
        'https://run.mocky.io/v3/e6fe36f3-7e5c-40a0-9d39-fa9d7340ce80',
      )
      .then(res => res.data.slice(0, 4)),
  );

  return (
    <Container>
      <Title>Últimas notícias</Title>

      {isLoading ? (
        <Loading />
      ) : (
        data.map((news: Post) => (
          <LastNewsCard
            key={news.title}
            title={news.title}
            publishedAt={news.metadata.publishedAt}
          />
        ))
      )}
    </Container>
  );
};

export default Aside;
