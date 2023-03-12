import type { ChangeEvent, SyntheticEvent } from 'react';
import type { MailProps } from '@/libs/utils/sendMail';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import axios from 'axios';

async function sendMailAPI({ ...rest }: MailProps) {
  const response = await axios.post<string>('/api/email', rest);
  return response.data;
}

export default function useContact() {
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });
  const { name, email, subject, body } = inputs;

  // Mutations
  const sendMailMutate = useMutation(sendMailAPI);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onClear = () => {
    setInputs({
      name: '',
      email: '',
      subject: '',
      body: '',
    });
  };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await sendMailMutate.mutateAsync({ ...inputs });
      toast.success(`메일 전송 (${response})`);
    } catch (err: any) {
      toast.error(err);
    }

    queryClient.clear();
    onClear();
  };

  return { name, email, subject, body, onChange, onClear, onSubmit };
}
