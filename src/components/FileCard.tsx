import {DocFile} from '../types/index.ts';
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {useNavigate} from "react-router-dom";

const FileCard = ({file}: { file: DocFile }) => {
  const navigate = useNavigate()

  const openFile = () => {
    navigate(`/file/${file.id}`)
  }

  const {name, status} = file;

  return (
    <Card
      className="cursor-pointer hover:scale-105"
      onClick={openFile}
    >
      <CardHeader>
        <h3>
          {name}
        </h3>
      </CardHeader>
      <CardContent>
        <p
          className="text-gray-600 text-sm"
        >
          {status ? "Done" : "In Progress"}
        </p>
        <span className="text-sm opacity-85">
          {file.created_at}
        </span>
      </CardContent>
    </Card>
  );
};

export default FileCard;
