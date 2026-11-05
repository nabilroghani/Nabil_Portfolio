// Automatically resizes and compresses Cloudinary delivery URLs so images
// are served as lightweight optimized WebP/AVIF at right dimensions and quality.
export const optimizedImage = (url, width = 600) => {
  if (!url || typeof url !== 'string') return url;
  if (!url.includes('/upload/')) return url;
  if (url.includes('w_')) return url;
  return url.replace('/upload/', `/upload/w_${width},c_limit,q_auto:good,f_auto/`);
};
