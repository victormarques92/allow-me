import React from 'react';
import { formatDate } from '../../hooks';
import { Anchor, PublishedAt, Title } from './styles';

interface LastNewsCardProps {
  title: string;
  publishedAt: number;
}

const LastNewsCard: React.FC<LastNewsCardProps> = ({
  title,
  publishedAt,
}) => {
  return (
    <Anchor href="#!">
      <Title>{title}</Title>

      <PublishedAt>{formatDate(publishedAt)}</PublishedAt>
    </Anchor>
  );
};

export default LastNewsCard;
