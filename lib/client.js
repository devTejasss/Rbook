import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'owk1dwi7',
  dataset: 'production',
  apiVersion: '2023-01-04',
  useCdn: true,
  token: "skFmMpT6fJ8X0pBO1H6IQDOfkWfo89acbhex0RPhQXL9TymmKogxWcuKmhgnm9P7Uv6WHCYx05yHUjGnIF0YF5jeZnihbj7ocjWBAiZLObC4a8BtDmZxXOK3NofAHtUvcN5Eh1CLccOtyp3uBMJX70EYdjq3Rjp2aGcEf2l7k4hSFQ3b0rKv"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);