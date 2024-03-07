import AllFiles from "./AllFiles.tsx";
import {useEffect, useState} from "react";
import {helpers} from "../helpers/index.js";
import AddFile from "@/components/AddFile.js";
import {Route, Routes} from "react-router";
import FileComponent from "@/components/FileComponent.js";

const Home = () => {
  const [init, setInit] = useState(true);

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

  return (
    <div
      className=""
    >
      <Routes>
        <Route
          path="/add"
          element={
            <AddFile />
          }
        />
        <Route
          path="/file/:id"
            element={
                <FileComponent />
            }
        />
        <Route
          path="*"
          element={
            <AllFiles />
          }
        />
      </Routes>
    </div>
  )
};

export default Home;
