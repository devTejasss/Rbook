import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'owk1dwi7',
  dataset: 'production',
  apiVersion: '2023-01-04',
  useCdn: true,
  token: "skJLxdkQY7bG8Kb7h5OwZ1gaoZwZuEO0bP2HFw0tc1kQXxgFHLFtimfYN0IqIxNotB6jabpYjD8SiLbuiXd6mW5F57MEwRKYQS2G8vHkjmHJ0APwVTpmzGFZot1K7Uo5962ZaoRwGwUKlY5nuTYJJzYOBQ0QIeWot3HVGNwESpJQwF8PO2jH"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);