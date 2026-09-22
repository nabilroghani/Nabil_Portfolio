// Injects Cloudinary's automatic format/quality transform into an existing
// delivery URL so images are served as optimized WebP/AVIF at the right quality.
export const optimizedImage = (url) => {
  if (!url || typeof url !== 'string' || !url.includes('/upload/')) return url;
  if (url.includes('f_auto')) return url;
  return url.replace('/upload/', '/upload/f_auto,q_auto/');
};
