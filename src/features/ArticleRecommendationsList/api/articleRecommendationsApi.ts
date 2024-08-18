import { rtkClient } from 'shared/api/rtkClient';
import type { Article } from 'entities/Article';

const recommendationsApi = rtkClient.injectEndpoints({
  endpoints: build => ({
    getRecommendations: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
});

export const { useGetRecommendationsQuery } = recommendationsApi;
