import AllFiles from "./AllFiles.tsx";
import {useEffect, useState} from "react";
import {helpers} from "../helpers/index.js";
import AddFile from "@/components/AddFile.js";
import {Button} from "@/components/ui/button.js";

const Home = () => {
  const [init, setInit] = useState(true);
  const [addFile, setAddFile] = useState(false);

  const mount = async () => {
    await helpers.api.init();
    setInit(false);
  }

  useEffect(() => {
    mount();
  }, [])

  if (init) {
    return (
      <div
        className=""
      >
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      </div>
    )
  }

  if (addFile) {
    return (
      <AddFile
        setAddFile={setAddFile}
      />
    )
  }

  return (
    <div
      className=""
    >
      <Button
        onClick={() => setAddFile(true)}
      >
        Add File
      </Button>
      <AllFiles/>
    </div>
  )
};

export default Home;
