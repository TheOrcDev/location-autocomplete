"use server";

import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client();
export const autocomplete = async (input: string) => {
  if (!input) return [];

  try {
    const response = await client.textSearch({
      params: {
        query: input,
        key: process.env.GOOGLE_API_KEY!,
      },
    });

    return response.data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
