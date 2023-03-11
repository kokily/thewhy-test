import axios from 'axios';

export async function imageUpload(file: File): Promise<string> {
  const { data }: { data: { url: string } } = await axios.post('/api/image', {
    name: file.name,
    type: file.type,
  });

  const response = data.url
    .split('?')[0]
    .replace('s3.ap-northeast-2.amazonaws.com/', '');

  await axios.put(data.url, file, {
    headers: {
      'Content-Type': file.type,
      'Access-Control-Allow-Origin': '*',
    },
  });

  return response;
}
