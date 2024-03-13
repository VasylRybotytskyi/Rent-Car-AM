import { createApi } from "@reduxjs/toolkit/query/react";
import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clsopo3oj057t01w9dx0xcp9f/master"
);

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: async (arg) => {
    try {
      const data = await client.request(arg.body);
      return { data };
    } catch (error) {
      return { error };
    }
  },
  endpoints: (builder) => ({
    getCarsList: builder.query<any, void>({
      query: () => ({
        body: gql`
          query MyQuery {
            carLists(first: 12) {
              carBrand
              id
              price
              name
              carClass
              carFuel
              imagePath {
                url
              }
              rating
              specialFeatures
              configuration
              transmission
              description
              speedLimit
              year
              hp
              engine
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetCarsListQuery } = carsApi;
