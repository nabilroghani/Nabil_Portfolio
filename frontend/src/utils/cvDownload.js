import API from '../api/axios';

export const downloadCv = async () => {
  const res = await API.get('/cv');

  if (!res.data?.driveId) {
    throw new Error('ID not found');
  }

  const driveId = res.data.driveId;
  const downloadLink = `https://drive.google.com/uc?export=download&id=${driveId}`;
  const previewLink = `https://drive.google.com/file/d/${driveId}/view`;

  const link = document.createElement('a');
  link.href = downloadLink;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  await API.post('/stats/download');

  return { downloadLink, previewLink };
};
