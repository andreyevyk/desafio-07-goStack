import React, { useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import filesize from 'filesize';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

import { Container, ImportFileContainer } from './styles';
import Upload from '../../components/Upload';
import FileList from '../../components/FileList';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    const data = new FormData();

    if (!uploadedFiles.length) return;

    const file = uploadedFiles[0];

    data.append('file', file.file, file.name);
    try {
      await api.post('/transactions/import', data);
      history.push('/');
    } catch (err) {
      console.log(err.response.error);
    }
  }

  function submitFile(files: File[]): void {
    const uploadFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));

    setUploadedFiles(uploadFiles);
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <h1>Importar uma transação</h1>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <footer>
            <div>
              <FiAlertTriangle size={20} />
              <span>Permitido apenas arquivos CSV</span>
            </div>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
