import type { Posts } from './types';

import { useState, useEffect } from 'react';
import { getPosts } from '.';

export const usePosts = (): UsePosts => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    let subscribed = true;

    if (subscribed) {
      const getAPIResponse = async (): Promise<void> => {
        const apiResponse = await getPosts();
        setPosts(apiResponse);
      };

      getAPIResponse();
    }

    return () => {
      subscribed = false;
    };
  }, []);

  return {
    posts,
  };
};

interface UsePosts {
  posts: Posts[];
}
