import type { Posts, PostParams } from './types';

import { createRequest } from './config';

export const api = createRequest({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = async (): Promise<Posts[]> => {
  const res = await api.get<Posts[]>('/posts');
  return res.data;
};

export const postPosts = async (params: PostParams): Promise<Posts> => {
  const res = await api.post<Posts>('/posts', {
    ...params,
  });

  return res.data;
};
