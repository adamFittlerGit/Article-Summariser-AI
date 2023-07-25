import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
    reducerPath: 'articleApi',
    endpoints: (buidler) => ({
        getSummary: buidler.query({
            query: (params) => `test`
        })
    })
});