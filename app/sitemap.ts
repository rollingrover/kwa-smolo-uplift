import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yourdomain.com', lastModified: new Date() },
    { url: 'https://yourdomain.com/our-work' },
    { url: 'https://yourdomain.com/gallery' },
    { url: 'https://yourdomain.com/get-involved' },
  ];
}
