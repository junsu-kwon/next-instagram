import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // cdn에 캐쉬할지 여부
  apiVersion: '2023-04-27',
  token: process.env.SANITY_SECRET_TOKEN, // client로 콘텐츠를 업데이트하려는 경우
});
