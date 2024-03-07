import {DocFile} from '../types/index.ts';
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";

const FileCard = ({file}: { file: DocFile }) => {

  const {name, status} = file;

  return (
    <Card
      className="cursor-pointer hover:scale-105"
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
      </CardContent>
    </Card>
  );
};

export default FileCard;
