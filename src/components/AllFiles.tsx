import {useEffect, useState} from "react";
import {DocFile} from "../types/index.js";
import services from "../services/index.js";

const AllFiles = () => {
  const [files, setFiles] = useState<DocFile[]>([]);

  const getFiles = async () => {
    const data = {};
    const res = await services.fileApis.getAllFiles(data);
    setFiles(res.data);
  }

  useEffect(() => {
    getFiles();
  }, [])

  return (
    <div>
      <h1>All Files</h1>
      {
        files.length === 0 && <p>No files found</p>
      }
      {
        files.map((file) => {
          return (
            <div key={file.id}>
              <h2>{file.name}</h2>
              <p>{file.status}</p>
            </div>
          )
        })
      }
    </div>
  )
};

export default AllFiles;
