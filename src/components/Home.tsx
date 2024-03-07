import AllFiles from "./AllFiles.tsx";
import {useEffect, useState} from "react";
import {helpers} from "../helpers/index.js";

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
      <AllFiles/>
    </div>
  )
};

export default Home;
