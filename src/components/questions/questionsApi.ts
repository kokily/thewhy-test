import type { Question } from '@prisma/client';
import axios from 'axios';
import qs from 'qs';

type ListQuestionsQueries = {
  title?: string;
  cursor?: string;
};

export async function listQuestionsAPI(queries: ListQuestionsQueries) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<Question[]>(`/api/questions?${queryString}`);
  return response.data;
}

export async function readQuestionAPI(id: string) {
  const response = await axios.get<Question>(`/api/questions/${id}`);
  return response.data;
}

export async function addQuestionAPI(payload: AddQuestionPayload) {
  const response = await axios.post<Question>('/api/questions/add', payload);
  return response.data;
}

export async function updateQuestionAPI({
  id,
  payload,
}: {
  id: string;
  payload: AddQuestionPayload;
}) {
  const response = await axios.put<Question>(
    `/api/questions/update/${id}`,
    payload
  );
  return response.data;
}

export async function validPasswordAPI({
  id,
  password,
}: {
  id: string;
  password: string;
}) {
  const response = await axios.post(`/api/questions/valid`, { id, password });
  return response.data;
}

export async function removeQuestionAPI({
  id,
  password,
}: {
  id: string;
  password?: string;
}) {
  const response = await axios.patch(`/api/questions/remove/${id}`, {
    password,
  });
  return response.data;
}

export async function addReplyAPI({ id, body }: { id: string; body: string }) {
  const response = await axios.patch<Question>(`/api/reply/add/${id}`, {
    body,
  });
  return response.data;
}

export async function removeReplyAPI(id: string) {
  const response = await axios.delete(`/api/reply/remove/${id}`);
  return response.data;
}
