import React from 'react';
import {
  iconLink,
  iconLinkedin,
  iconTwitter,
} from '../../assets';
import { formatDate, formatText } from '../../hooks';
import {
  Container,
  Header,
  InfoPublish,
  Medias,
  Text,
  Title,
} from './styles';

interface NewsCardProps {
  title: string;
  body: string;
  author: string;
  publishedAt: number;
}

const socialMedia = [
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: iconTwitter,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: iconLinkedin,
  },
  {
    name: 'Link',
    url: '#!',
    icon: iconLink,
  },
];

const NewsCard: React.FC<NewsCardProps> = ({
  author,
  body,
  publishedAt,
  title,
}) => {
  return (
    <Container>
      <Header>
        <InfoPublish>
          <h5>{author}</h5>

          <p>{formatDate(publishedAt)}</p>
        </InfoPublish>

        <Medias>
          {socialMedia.map(media => (
            <a key={media.name} href={media.url} target="_blank">
              <img src={media.icon} alt={media.name} />
            </a>
          ))}
        </Medias>
      </Header>

      <Title>{title}</Title>

      <Text>{formatText(body)}</Text>
    </Container>
  );
};

export default NewsCard;
