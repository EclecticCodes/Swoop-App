// utils/sanityClient.ts
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'yourProjectId',  // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your dataset name (e.g., 'production')
  useCdn: true,                // Set to true for faster responses (cached data)
});

export default client;
