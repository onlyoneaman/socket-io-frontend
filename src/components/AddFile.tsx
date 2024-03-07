import services from "../services/index.ts";
import {useState} from "react";
import {Button} from "@/components/ui/button.js";

const AddFile = () => {
  const [name, setName] = useState<string>("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name
    };
    await services.fileApis.addFile(data);
  }

  return (
    <div>
      <input
        name={"name"}
        placeholder="File Name"
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        onClick={submit}
      >
        Add File
      </Button>
    </div>
  )
};

export default AddFile;
