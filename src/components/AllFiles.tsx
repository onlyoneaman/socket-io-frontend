import {useEffect, useState} from "react";
import {DocFile} from "../types/index.js";
import services from "../services/index.js";
import FileCard from "@/components/FileCard.js";
import {Card, CardContent, CardHeader} from "@/components/ui/card.js";

const AllFiles = (
  {
    addNewFile,
  }: any
) => {
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
      {
        files.length === 0 && <p>No files found</p>
      }
      <div
        className="text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        <Card
          className="cursor-pointer"
          onClick={addNewFile}
        >
          <CardHeader>
            <h2>Add new file</h2>
          </CardHeader>
        </Card>
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
