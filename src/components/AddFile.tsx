import services from "../services/index.ts";
import {useState} from "react";
import {Button} from "@/components/ui/button.js";
import {Input} from "@/components/ui/input.js";
import {Link, useNavigate} from "react-router-dom";

const AddFile = () => {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name
    };
    await services.fileApis.addFile(data);
    navigate("/");
  }

  return (
    <div>
      <Link to={"/"}>
        <Button>
          back to files
        </Button>
      </Link>
      <div className="py-6 space-y-3">
        <Input
          name={"name"}
          placeholder="File Name"
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && submit(e)}
        />
        <Button
          onClick={submit}
        >
          Add File
        </Button>
      </div>
    </div>
  )
};

export default AddFile;
