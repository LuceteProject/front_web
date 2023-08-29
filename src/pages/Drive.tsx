import React, { useState } from "react";
import { Container } from "react-bootstrap";

interface FileItem {
  name: string;
  size: number;
  type: string;
}

const Page = () => {
  const [files, setFiles] = useState<FileItem[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // 파일 선택 로직 추가 (예: 파일 업로드)
      const newFile: FileItem = {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
      };
      setFiles((prevFiles) => [...prevFiles, newFile]);
    }
  };

  const handleDownload = (file: FileItem) => {
    // 파일 다운로드 로직 추가
    alert(`다운로드: ${file.name}`);
  };

  return (
    <Container>
      <h1>문서 저장 웹페이지</h1>
      <div>
        {/* 파일 선택과 업로드 컴포넌트 */}
        <input type="file" onChange={handleFileChange} />
      </div>
      <div>
        {/* 파일 목록 컴포넌트 */}
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file.name}{" "}
              <button onClick={() => handleDownload(file)}>다운로드</button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Page;
