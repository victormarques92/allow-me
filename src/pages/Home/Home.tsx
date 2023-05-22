import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { Author, Post } from '../../@types';
import Layout from '../../Layout';
import { Loading, NewsCard, Select } from '../../components';
import { Aside } from '../../containers';
import { orderBy } from '../../mocks';
import { Container, Filter, Main } from './styles';

const Home = () => {
  const [filterOrderBy, setFilterOrderBy] = useState<string>();
  const [filterAuthor, setFilterAuthor] = useState<string>();

  const { isLoading: isLoadingAuthors, data: dataAuthors } =
    useQuery(['authors'], () =>
      axios
        .get(
          'https://run.mocky.io/v3/132ec473-6262-4aa0-bfc5-60535ce831e5',
        )
        .then(res => res.data),
    );

  const { isLoading, data } = useQuery(['news'], () =>
    axios
      .get(
        'https://run.mocky.io/v3/e6fe36f3-7e5c-40a0-9d39-fa9d7340ce80',
      )
      .then(res => res.data),
  );

  const dataFiltered = useCallback(() => {
    let filtered = data;

    if (filterAuthor) {
      filtered = filtered.filter(
        (item: Post) => item.metadata.authorId === +filterAuthor,
      );
    }
    console.log('filtered', filtered);

    if (filterOrderBy === 'most-recent') {
      filtered = filtered.sort(
        (a: Post, b: Post) =>
          b.metadata.publishedAt - a.metadata.publishedAt,
      );
    }

    if (filterOrderBy === 'older') {
      filtered = filtered.sort(
        (a: Post, b: Post) =>
          a.metadata.publishedAt - b.metadata.publishedAt,
      );
    }

    return filtered;
  }, [data, filterAuthor, filterOrderBy]);

  return (
    <Layout>
      <Filter>
        <Select
          name="author"
          label="Filtrar por autor"
          options={dataAuthors}
          onChange={setFilterAuthor}
          disabled={isLoadingAuthors}
        />

        <Select
          name="orderBy"
          label="Ordenar por"
          options={orderBy}
          onChange={setFilterOrderBy}
          disabled={isLoadingAuthors}
        />
      </Filter>

      <Container>
        <Main>
          {isLoading ? (
            <Loading />
          ) : (
            dataFiltered()?.map((news: Post) => (
              <NewsCard
                key={news.title}
                title={news.title}
                author={
                  dataAuthors.find(
                    (author: Author) =>
                      author.id === news.metadata.authorId,
                  ).name
                }
                body={news.body}
                publishedAt={news.metadata.publishedAt}
              />
            ))
          )}
        </Main>

        <Aside />
      </Container>
    </Layout>
  );
};

export default Home;
