import type { Notice } from '@prisma/client';
import axios from 'axios';
import qs from 'qs';

// List Notices Queries
export type ListNoticesQueries = {
  title?: string;
  cursor?: string;
};

export async function listNoticesAPI(queries: ListNoticesQueries) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<Notice[]>(`/api/notices?${queryString}`);
  return response.data;
}

export async function readNoticeAPI(id: string) {
  const response = await axios.get<Notice>(`/api/notices/${id}`);
  return response.data;
}

export async function addNoticeAPI(payload: AddNoticePayload) {
  const response = await axios.post<Notice>('/api/notices/add', payload);
  return response.data;
}

export async function removeNoticeAPI(id: string) {
  const response = await axios.delete(`/api/notices/remove/${id}`);
  return response.data;
}

export async function updateNoticesAPI({
  id,
  payload,
}: {
  id: string;
  payload: AddNoticePayload;
}) {
  const response = await axios.put<Notice>(
    `/api/notices/update/${id}`,
    payload
  );
  return response.data;
}
