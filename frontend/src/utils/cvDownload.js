import API from '../api/axios';

export const downloadCv = async () => {
  const res = await API.get('/cv');

  const driveId = res.data?.driveId;
  const resumeUrl = res.data?.resumeUrl;

  if (!driveId && !resumeUrl) {
    throw new Error('CV not found');
  }

  // Google Drive direct download link
  const downloadLink = driveId
    ? `https://drive.google.com/uc?export=download&id=${driveId}`
    : resumeUrl;

  const isMobile =
    typeof window !== 'undefined' &&
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    // Mobile browsers (Safari/Chrome) block async window.open popups, but location.href starts direct download
    window.location.href = downloadLink;
  } else {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  API.post('/stats/download').catch(() => {});

  return { downloadLink };
};
