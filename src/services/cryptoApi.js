import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '6f8172ce6fmsh0ded82f6f309aabp166bb4jsnaf8ac13c0f9d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        GetCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
    }),
});

export const {
    useGetCryptosQuery,
} = cryptoApi;