import React, { useState } from 'react';

import api from '~/services/api';
import Input from '~/components/Input';

import { Container, FormInput } from '../styles';

export default function CreateOffice() {
  const [file, setFile] = useState(null);

  async function handleFile(myFile) {
    const data = new FormData();

    data.append('file', myFile);

    const response = await api.post('upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setFile(response.data.path);
  }

  return (
    <Container>
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Nome"
        component={FormInput}
      />

      <Input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        data-file={file}
        onChange={e => handleFile(e.target.files[0])}
        component={FormInput}
      />

      <Input
        id="city"
        name="city"
        type="text"
        placeholder="Cidade"
        component={FormInput}
      />

      <Input
        id="state"
        name="state"
        type="text"
        placeholder="Estado"
        component={FormInput}
      />
    </Container>
  );
}
