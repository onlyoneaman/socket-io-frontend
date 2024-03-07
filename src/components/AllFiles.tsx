import {useEffect, useState} from "react";
import {DocFile} from "../types/index.js";
import services from "../services/index.js";
import FileCard from "@/components/FileCard.js";
import {Card, CardHeader} from "@/components/ui/card.js";
import {useNavigate} from "react-router-dom";

const AllFiles = () => {
  const [files, setFiles] = useState<DocFile[]>([]);
  const navigate = useNavigate();

  const getFiles = async () => {
    const data = {};
    const res = await services.fileApis.getAllFiles(data);
    let newFiles = res.data;
    if(newFiles.length > 0) {
      setFiles(newFiles);
    }
  }

  useEffect(() => {
    getFiles();
  }, [])

  return (
    <div>
      <div
        className="text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        <Card
          className="cursor-pointer"
          onClick={() => navigate('/add')}
        >
          <CardHeader>
            <h2>Add new file</h2>
          </CardHeader>
        </Card>
        {
          files.length === 0 && <p>No files found</p>
        }
        {
          files.map((file) => {
            return (
              <FileCard file={file} key={file.id}/>
            )
          })
        }
      </div>
    </div>
  )
};

export default AllFiles;
