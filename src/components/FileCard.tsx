import {DocFile} from '../types/index.ts';

const FileCard = ({file}: { file: DocFile }) => {

  const {name, status} = file;

  return (
    <div>
      <h2>{name}</h2>
      <p>{status}</p>
    </div>
  );
};

export default FileCard;
