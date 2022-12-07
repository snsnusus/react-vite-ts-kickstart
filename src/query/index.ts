import type { UseQueryResult, UseMutationResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { Posts, ApiErrorResponse, PostParams } from '~/apis/types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import * as api from '~/apis';

export const usePostsQuery = (): UseQueryResult<
  Posts[],
  AxiosError<ApiErrorResponse>
> =>
  useQuery<Posts[], AxiosError<ApiErrorResponse>>(['posts'], () =>
    api.getPosts()
  );

export const usePostsMutation = (): UseMutationResult<
  Posts,
  AxiosError<ApiErrorResponse>,
  PostParams
> => {
  const queryClient = useQueryClient();

  return useMutation<Posts, AxiosError<ApiErrorResponse>, PostParams>(
    api.postPosts,
    { onSuccess: (data) => queryClient.setQueryData(['posts'], data) }
  );
};
