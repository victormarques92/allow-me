export interface Post {
  title: string;
  body: string;
  metadata: Metadata;
}

export interface Metadata {
  publishedAt: number;
  authorId: number;
}

export interface Author {
  name: string;
  id: number;
}
