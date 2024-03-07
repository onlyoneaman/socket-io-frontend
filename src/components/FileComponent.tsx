import {useEffect, useState} from "react";
import {useParams} from "react-router";
import services from "@/services/index.js";
import {DocFile} from "@/types/index.js";

const FileComponent = () => {
  const {id} = useParams();
  const [file, setFile] = useState<DocFile | null>(null);
  const [load, setLoad] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // get id from url or state and fetch file
  const fetchFile = async () => {
    try {
      const response = await services.fileApis.getSingleFile(id);
      const data = response.data;
      setFile(data);
      console.log(data);
      setLoad(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoad(false);
    }
  };

  const mount = async () => {
    await fetchFile();
  }

  useEffect(() => {
    mount();
  }, []);

  if (load) {
    return (
      <div>
        Fetching file...
      </div>
    )
  }

  if (error) {
    return (
      <div>
        Error fetching file.
      </div>
    )
  }

  return (
    <div>
      <div>
        {id}
      </div>
      <p>
        {file?.name}
      </p>
      <p>
        {file?.status ? "Done" : "Pending"}
      </p>
      <p>
        {file?.created_at}
      </p>
      {
        file?.fields.map((field, index) => (
          <div
            className="flex justify-between"
            key={index}
          >
            <p>
              {field.name}
            </p>
            <p>
              {field.status ? "Done" : "Pending"}
            </p>
          </div>
        ))
      }
    </div>
  )
};

export default FileComponent;
